require("dotenv").config();

module.exports = {
  "development": {
    "use_env_variable": "JAWSDB_URL",
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
