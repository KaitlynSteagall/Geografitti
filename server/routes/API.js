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

  // admin path to check all users
  app.get("/users", (req, res) => {
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

  app.put("/user/:id/update", function (req, res) {
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


  // new image: get url and user info from client, make new local object, link to user in db
  // path to return data on a single image
  app.get("image/:id", (req, res) => {
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
  app.get("gallery/:id", (req, res) => {
    Image.find({ _id: req.params.id })
    .then(dbImage => {
      // if we get data back, pass to client
      res.json(dbImage);
    })
    .catch(error => {
      // pass errors
      res.json(error)
    })
  })

  // get nearby images
  app.get("/nearbyImages", function (req, res) {
    Image.find({})
      .then(dbImage => {
        // If all Users are successfully found, send them back to the client
        res.json(dbImage);
      })
      .catch(function (err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
  });

  // route to change photo overtime (w/ upvotes) /mark NSFW.

  app.put("/markNSFW/:id", (req, res) => {
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

  app.put("/markupvotes/:id", (req, res) => {
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


  //============================
  //     UPDATE (app.put)
  //============================
  // route to change username
  // route to change email (needs to talk to firebase for email)
  // route to change "view nsfw" setting
  //============================
  //     DELETE (app.delete)
  //============================
  // admin route to delete user
  app.delete("users/:id/delete", (req, res) => {
    console.log("request param id", req.params.id);
    User.destroy({ where: { userIndex: req.params.id } }).then( // needs to be converted for Mongoose
      dbUserRemoval => {
        res.json(dbUserRemoval);
      }
    );
  });
  // admin route to delete image
  app.delete("/image/:id/delete", (req, res) => {
    Image.destroy({ where: { publicIndex: req.params.id } }).then( // needs to be converted for Mongoose
      dbImageRemoval => {
        res.json(dbImageRemoval);
      }
    );
  });

  app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
  });

  //script that runs on start up and checks to see if anything in databas and if isn't should function
};