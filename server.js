const express = require("express");
require("dotenv").config();
// app.use(express.static(path.join(__dirname, 'app')));

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models/index.js");
// const post = require("./models/post");

// Set Handlebars as the default templating engine.

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  // res.send("hello world");
    db.post
      .findAll({
        include: [db.user, db.restaurant]
      })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
})

// Turn on that server!
db.sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})