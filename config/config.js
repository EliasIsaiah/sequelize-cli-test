require("dotenv").config();

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_HOSTNAME,
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "test": {
        "username": "root",
        "password": "root",
        "database": "Foodies_Test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_HOSTNAME,
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    }
}
