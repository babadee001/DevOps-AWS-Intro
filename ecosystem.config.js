module.exports = {
  apps: [{
    name: 'HelloBooks',
    script: 'app.js',
    "environment_variables" : {
      NODE_ENV: 'production',
      DATABASE_URL: 'postgres://boddocvovmdlvc:1edf249c9462951822a551043e77809aa6b5342a37ae6598e7b52c826fab10cd@ec2-54-235-240-126.compute-1.amazonaws.com:5432/dch1ud2dv6hni1'
    }
  },
],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-221-170-75.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/HelloBooksKey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:babadee001/DevOps-AWS-Intro.git',
      path: '/home/ubuntu/HelloBooks',
      'post-deploy': 'npm install; npm run build; pm2 start app.js --interpreter ./node_modules/.bin/babel-node'
    }
  }
};

