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

// #region READ / GET ---

  // admin path to check all users
  app.get("/api/users", (req, res) => {
    // get all users in the db
    User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(error => {
        // If an error occurred, send it to the client
        res.json(error);
      });
  });

  // generic path to get any needed information about a single user
  app.get("/api/users/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
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

  // path to return data on a single image
  app.get("/api/images/:id", (req, res) => {
    Image.findOne({ _id: req.params.id })
      .then(dbImage => {
        // if we get data back, pass to client
        res.json(dbImage);
      })
      .catch(error => {
        // pass errors
        res.json(error)
      })
  });

  // path to return all images for a single user
  app.get("/api/users/:id/gallery", (req, res) => {
    Image.find({ _id: req.params.id })
      .then(dbImage => {
        // if we get data back, pass to client
        res.json(dbImage);
      })
      .catch(error => {
        // pass errors
        res.json(error)
      })
  });

  // get nearby images
  app.get("/api/images/nearby", function (req, res) {
    Image.find({})
      .then(dbImage => {
        // If all images are successfully found, send them back to the client
        res.json(dbImage);
      })
      .catch(function (err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
  });

  // #endregion

// #region CREATE / POST ---

  // new user: get plaintext from client, send to firebase, make new local object
  app.post("/api/users/new", (req, res) => {
    const userObject = req.body;
    // tell firebase to make a new user, and save the uid it creates
    const newID = auth.handleNewUser(userObject.email, userObject.password);
    // tell the local mongo server about this new user as well
    User.create({
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

  // login existing user
  app.post("/api/users/login", (req, res) => {
    // TODO: add complicated logic to check username or user email against local database, allowing users to login with username or email

    const userObject = req.body;
    auth.handleLogin(userObject.email, userObject.password);
  });

  // create new image entry
  app.post("/api/images/new", (req, res) => {
    const imageObject = req.body;

    Image.create({
      imageURL: imageObject.url,
      imageLocation: imageObject.location,
      imageAuthor: imageObject.userID,
    })
      .then(dbImage => {
        // View the added result in the console
        console.log(dbImage);
      })
      .catch(error => {
        // If an error occurred, log it
        console.log(`error adding image to mongo db: `, error);
      });
  });

  // #endregion

// #region UPDATE / PUT ---

  // iterate nsfw count
  app.put("/api/images/:id/nsfw", (req, res) => {
    // Find all Users
    Image.update(
      { _id: req.params.id },
      { set: { imageNSFW } }, // THIS LINE NEEDS COMPLETED
      // When that's done, run this function
      (error, edited) => {
        // show any errors
        if (error) {
          console.log(error);
          res.send(error);
        }
        else {
          // Otherwise, send the result of our update to the browser
          console.log(edited);
          res.send(edited);
        }
      }
    );
  });

  // add upvote & extend image life
  app.put("/api/images/:id/upvote", (req, res) => {
    // Find all Users
    Image.update(
      { _id: req.params.id },
      { set: { imageUpvotes } }, // THIS LINE NEEDS COMPLETED
      // When that's done, run this function
      (error, edited) => {
        // show any errors
        if (error) {
          console.log(error);
          res.send(error);
        }
        else {
          // Otherwise, send the result of our update to the browser
          console.log(edited);
          res.send(edited);
        }
      }
    );
  });

  //change/update user info
  app.put(`/api/users/:id/update`, function (req, res) {
    // Find all Users
    User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(function (err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
  });


  // #endregion

// #region DELETE ---

  // admin route to delete user
  app.delete("/api/users/:id/delete", (req, res) => {
    User.destroy({ where: { userIndex: req.params.id } }).then( // needs to be converted for Mongoose
      dbUserRemoval => {
        res.json(dbUserRemoval);
      }
    );
  });

  // route to delete image
  app.delete("/api/images/:id/delete", (req, res) => {
    Image.destroy({ where: { publicIndex: req.params.id } }).then( // needs to be converted for Mongoose
      dbImageRemoval => {
        res.json(dbImageRemoval);
      }
    );
  });

  app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
  });

  // #endregion

  //script that runs on start up and checks to see if anything in databas and if isn't should function
};