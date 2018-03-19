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
      host: 'ec2-18-188-113-37.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/HelloBooksKey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:babadee001/DevOps-AWS-Intro.git',
      path: '/home/ubuntu/HelloBooks',
      'post-deploy': 'npm install; npm run build && pm2 start ecosystem.config.js --env production'
    }
  }
};

