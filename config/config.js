require("dotenv").config();

module.exports =
  {
    "development": {
      url: process.env.DB_URL,
      dialect: "mysql"
    },
    "test": {
      "username": "root",
      "password": "root",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    },
    "production": {
      "username": "root",
      "password": "root",
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    }
  }
