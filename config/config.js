require("dotenv").config();

module.exports = {
  "development": {
    // "use_env_variable": "JAWSDB_URL",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: "foodies",
    "dialect": "mysql"
  },
  "test": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
// module.exports =
//   {
//     "development": {
//       "url": process.env.JAWSDB_URL,
//       "dialect": "mysql"
//     },
//     "test": {
//       "url": process.env.JAWSDB_URL,
//       "dialect": "mysql"
//     },
//     "production": {
//       "url": process.env.JAWSDB_URL,
//       "dialect": "mysql"
//     }
//   }
