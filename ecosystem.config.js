module.exports = {
  apps: [{
    name: 'HelloBooks',
    script: 'app.js',
    exec_interpreter: 'babel-node',
    env: {
      NODE_ENV: 'production',
      dialect: 'postgres',
      DATABASE_URL: 'postgres://lsfovzcr:u7rLpV5I0h3WTQLPXBDrfBICTapoe1o5@babar.elephantsql.com:5432/lsfovzcr'
    }
  },
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '45.2.2.196',
      key: '~/.ssh/london.pem',
      ref: 'origin/master',
      repo: 'https://github.com/babadee001/DevOps-AWS-Intro',
      path: '/home/ubuntu/HelloBooks',
      'post-deploy': 'npm install; npm run build && pm2 start ecosystem.config.js --env production'
    }
  }
};

