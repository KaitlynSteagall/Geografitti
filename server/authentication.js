const firebase = require('firebase');
require('dotenv').config();
const User = require("./models/user");

// authenticate and initialize firebase
const firebaseConfig = {
  apiKey: process.env.DB_FB_LOGIN_API_KEY,
  authDomain: process.env.DB_FB_LOGIN_AUTH_DOMAIN,
  databaseURL: process.env.DB_FB_LOGIN_URL,
  projectId: process.env.DB_FB_LOGIN_ID,
  storageBucket: process.env.DB_FB_STORAGEBUCKET,
  messagingSenderId: process.env.DB_FB_LOGIN_SENDER_ID,
  appId: process.env.DB_FB_LOGIN_APP_ID,
  measurementId: process.env.DB_FB_LOGIN_MEASURE_ID
};

const app = firebase.initializeApp(firebaseConfig);

module.exports = {
  handleNewUser(email, password) {
    // use firebase method to create new user on google's end
    app
      .auth()
      .createUserWithEmailAndPassword(email, password, displayName)
      .then(newUserData => {
        // once created, store FBase id and other data as new local user
        User.create({
          firebaseID: newUserData.user.uid,
          displayName: `theTaggingTook`,
          email: email,
        });
        console.log("signed in as" + newUserData.user.uid)
      })
      .catch(function (error) {
        console.log(`error ${error.code}: ${error.message}`);
      });
  },
  // this can probably be altered later to be smarter and allow display name or email login
  handleLogin(email, password) {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(`error ${error.code}: ${error.message}`);
      });
  },
  handleLogout(event) {
    firebase.auth().signOut()
      .then(function () {
        console.log(`logout was successful`);
      })
      .catch(function (error) {
        console.log(`error ${error.code}: ${error.message}`);
      });
  }
}
