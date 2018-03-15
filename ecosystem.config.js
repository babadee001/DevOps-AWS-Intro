module.exports = {
  apps: [{
    name: 'HelloBooks',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-143-87.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/HelloBooksKey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:babadee001/DevOps-AWS-Intro.git',
      path: '/home/ubuntu/HelloBooks',
      'post-deploy': 'npm install; npm start && pm2 startOrRestart ecosystem.config.js'
    }
  }
};

