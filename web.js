const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet')
const config = require('./config')
const cache = require('memory-cache')
const fs = require('fs')

app.use(helmet())

async function index_html() {
    const conf = {
        server_id: config.server_id
    }

    console.log("aa", conf)

    return await cached( "index.html", async () => {
        return fs.readFileSync(path.resolve(__dirname, 'build/index.html'), "utf8" ).replace("window.CONFIG={}", `window.CONFIG=${JSON.stringify(conf)}` )
    }, 360000)
}

app.get('/', async (req, res) => {
    res.type('text/html; charset=UTF-8');
    res.send( await index_html() )
})

app.use(express.static(path.join(__dirname, 'build')));

async function cached(key, func, timeout_in_seconds = config.site_cache,  timeout_callback=undefined) {
    return cache.get(key) || cache.put( key, await func(), timeout_in_seconds * 1000,  timeout_callback )
}

const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log(`API listening on port ${port}`)
})
