module.exports = {
  apps: [{
    name: 'HelloBooks',
    script: 'babel-node app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-221-170-75.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/HelloBooksKey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:babadee001/DevOps-AWS-Intro.git',
      path: '/home/ubuntu/HelloBooks',
      'post-deploy': 'npm install; npm run build; pm2 start npm -- start ecosystem.config.js'
    }
  }
};

