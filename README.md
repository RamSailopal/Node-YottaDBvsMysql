# Node-YottaDBvsMysql

A comparison of the performance of YottaDB vs Mysql in a node express framework

# Provisioning


[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/RamSailopal/Node-YottaDBvsMysql)

Locally:

    git clone https://github.com/RamSailopal/Node-YottaDBvsMysql.git
    cd Node-YottaDBvsMysql
    docker-compose up
    
Once provisioning is fully completed, two newman html reports will be generated with API GET/POST request results (see below for more info).
    
# Testing

The results of the tests can be found here:

YottaDB - https://htmlpreview.github.io/?https://github.com/RamSailopal/Node-YottaDBvsMysql/blob/main/newman/YottaDB-report.html

Mysql - https://htmlpreview.github.io/?https://github.com/RamSailopal/Node-YottaDBvsMysql/blob/main/newman/Mysql-report.html

A complete (side by side) report - https://htmlpreview.github.io/?https://github.com/RamSailopal/Node-YottaDBvsMysql/blob/main/newman/Complete-report.html

In **summary**, YottaDB **GET** requests are a lot quicker than Mysql taking **6ms** against **191ms** for Mysql. It is also quicker with regards to **POST** requests registering **106ms** against **195ms** for Mysql

