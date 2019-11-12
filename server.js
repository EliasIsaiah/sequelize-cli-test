const express = require("express");
const path = require("path");
const routes = require('./controllers');

// app.use(express.static(path.join(__dirname, 'app')));

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;


// Set Handlebars as the default templating engine.

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});