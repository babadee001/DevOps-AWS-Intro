#!/bin/bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
# source ~/.bashrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
#install node version 8.
nvm install 8.9.4
#pm2 install
npm install -g pm2
git clone https://github.com/babadee001/DevOps-AWS-Intro
sudo apt-get install nginx
sudo bash -c 'cat > /etc/nginx/sites-available/HelloBooks <<EOF
server {
  listen 80;
  server_name HelloBooks;
  location / {
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header  Host       $http_host;
    proxy_pass        http://18.188.78.243:8000;
  }
} 
EOF'
sudo ln -s /etc/nginx/sites-available/HelloBooks /etc/nginx/sites-enabled/HelloBooks
sudo service nginx restart
cd DevOps-AWS-Intro
pm2 startOrRestart ecosystem.config.js