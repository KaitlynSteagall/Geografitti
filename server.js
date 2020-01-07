const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

const checkForDatabase = require("./server/scripts/seedDB");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// get API routes from express first
const routes = require("./server/routes/API");
app.use(routes);

// Send every other request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/geograffiti");

// run the seed check
checkForDatabase();

// start API server
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
