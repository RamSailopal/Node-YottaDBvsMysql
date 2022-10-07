#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y npm mysql-client curl wget
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
source /opt/yottadb/current/ydb_env_set
/opt/yottadb/current/ydb <<< 'H'
source /opt/yottadb/current/ydb_env_set
cd /data/r1.34_x86_64/r
wget https://raw.githubusercontent.com/dlwicksell/nodem/master/src/v4wNode.m
cd /tmp 
wget https://raw.githubusercontent.com/dlwicksell/nodem/master/resources/environ
source /tmp/environ
export ydb_routines="/data/r1.34_x86_64/r(/home/yottadb/node_modules/nodem/src /data/r1.34_x86_64/r /data/r) /opt/yottadb/current/utf8/libyottadbutil.so"
export gtmroutines="/data/r1.34_x86_64/r(/home/yottadb/node_modules/nodem/src /data/r1.34_x86_64/r /data/r) /opt/yottadb/current/utf8/libyottadbutil.so"
cd /home/yottadb
npm install nodem
npm start
tail -f /dev/null
