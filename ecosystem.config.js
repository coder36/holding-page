module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'web',
      script    : 'web.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env production'
   */
  deploy : {
    production : {
      user : 'mark',
      host : '138.68.182.39',
      ref  : 'origin/master',
      repo : 'git@github.com:coder36/holding-page.git',
      path : '/home/mark/app',
      'post-deploy' : 'yarn install && pm2 startOrRestart ecosystem.json --env production'
    },
  }
};
