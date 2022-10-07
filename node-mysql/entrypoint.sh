#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y npm mysql-client
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
cd /home/node
mysql --user="root" --password="test123" -h mysql -e 'create database users;'
mysql --user="root" --password="test123" -h mysql users < setup.sql
npm install
npm start

