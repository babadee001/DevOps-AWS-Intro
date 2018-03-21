#download nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh
# source ~/.bashrc
#install node version 8.
nvm install 8.9.4
#pm2 install
npm i -g pm2
git clone https://github.com/babadee001/DevOps-AWS-Intro
sudo apt-get install nginx
echo "server {
  listen 80;
  server_name HelloBooks;
  location / {
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header  Host       $http_host;
    proxy_pass        http://127.0.0.1:8000;
  }
}" > /etc/nginx/sites-available/HelloBooks
sudo ln -s /etc/nginx/sites-available/HelloBooks /etc/nginx/sites-enabled/HelloBooks
sudo service nginx restart
cd DevOps-AWS-Intro/source
pm2 startOrRestart ecosystem.config.js