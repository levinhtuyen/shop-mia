
# Setup NuxtJS on Ubuntu server (Digital Ocean, EC2,...) Terminal Commands
# based on my YouTube video
# Recommended: An ubuntu server with at least 2 GB memory to handle npm run build

# login to server
ssh root@ip_address

# Upgrade Server - may take a few minutes
sudo apt update
sudo apt upgrade

# Install NGINX and Certbot
sudo apt install nginx certbot python3-certbot-nginx

# Allow Firewall Access
sudo ufw allow "Nginx Full"
ufw allow OpenSSH
ufw enable

# Install npm
apt install npm

# Install and configure PM2
npm install -g pm2

# Install YARN
npm install -g yarn

# go to www root
cd /var/www

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

#  Install NVM, Node.js and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

exec $SHELL
source ~/.nvm/nvm.sh
nvm install 20.10.0


# Set up SSL with Certbot (Let’s Encrypt):
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d gaubongmia.com -d www.gaubongmia.com


# Create NGINX config file and edit it
cd /etc/nginx/sites-available
touch gaubongmia
nano gaubongmia


# Syslink the file in sites-enabled
sudo ln -s /etc/nginx/sites-available/gaubongmia /etc/nginx/sites-enabled/gaubongmia


# remove the default config files
cd /etc/nginx/sites-available
rm default
cd /etc/nginx/sites-enabled
rm default


# make Sure NGINX file is good
nginx -t

# restart NGINX to reload config files
systemctl restart nginx

# Set up Nginx configuration for your Nuxt.js application.

server {

    listen 80;
    server_name gaubongmia.com www.gaubongmia.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/gaubongmia.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/gaubongmia.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

}

# Create a symbolic link to this file in the /etc/nginx/sites-enabled directory
sudo ln -s /etc/nginx/sites-available/gaubongmia /etc/nginx/sites-enabled/

# Check your nginx configuration for errors
sudo nginx -t

# restart Nginx to apply the changes
sudo systemctl restart nginx





# create app or clone project
cd  gaubongmia

# config yarn
yarn config set ignore-engines true || yarn install --ignore-engines

yarn install
yarn build



# set port 3000
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000


# start pm2
pm2 start ./node_modules/nuxt/bin/nuxt.js --name="gaubongmia" -- start

# Check pm2 is working
pm2 status
