const express = require("express");
const mongoose = require("mongoose");

const User = require("../models/user");
const Image = require("../models/image")
const auth = require("../authentication")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

module.exports = function (app) {
// new user: get plaintext from client, send to firebase, make new local object
app.post("/user/new", (req, res) => {
  const userObject = req.body;
  // tell firebase to make a new user, and save the uid it creates
  const newID = auth.registerUser(userObject.email, userObject.password);
  // tell the local mongo server about this new user as well
  db.User.create({
    firebaseID: newID,
    displayName: userObject.userName,
    email: userObject.email,
  })
    .then(dbUser => {
      // View the added result in the console
      console.log(dbUser);
    })
    .catch(error => {
      // If an error occurred, log it
      console.log(`error adding user to mongo db: `, error);
    });
});

// admin path to check all users
app.get("/users", (req, res) => {
  // get all users in the db
  db.User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(error => {
      // If an error occurred, send it to the client
      res.json(error);
    });
});

//login existing user
// generic path to get any needed information about a single user
app.get("/user/:id", (req, res) => {
  User.findOne({ firebaseID: req.params.id })
    // add reference to any images the user has made
    .populate("image")
    .then(dbUser => {
      // if we get data back, send it all up to the client
      res.json(dbUser);
    })
    .catch(error => {
      // If an error occurred, send that to client instead
      res.json(error);
    });
});

//change/update user info

app.put("/updateUser", function (req, res) {
  // Find all Users
  User.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});


// new image: get url and user info from client, make new local object, link to user in db
app.post("/image/new/:id", (req, res) => {
  const imageObject = req.body;
  db.Image.create({
    imageURL: imageObject.url,
    imageLocation: imageObject.location,
    imageAuthor: req.body.id,
  })
    .then(dbImage => {
      // View the added result in the console
      console.log(dbImage);
    })
    .catch(error => {
      // If an error occurred, log it
      console.log(`error adding image to mongo db: `, error);
    });
})

//get images from firebase

app.get("/images", function (req, res) {
  // Find all Users
  Image.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

//get nearby images

app.get("/nearbyImages", function (req, res) {
  // Find all Users
  Image.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

//get specific image from db/fb
app.get("/chosenImage", function (req, res) {
  // Find all Users
  Image.findOne({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

//route to change photo overtime (w/ upvotes) /mark NSFW.

app.put("/markImage", function (req, res) {
  // Find all Users
  Image.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});

//script that runs on start up and checks to see if anything in databas and if isn't should function
};