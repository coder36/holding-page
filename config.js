console.log(process.env.NODE_ENV)

const config = {
    server_id: process.env.SERVER_ID || "server_id_unset"
}

console.log(config)

module.exports = config
