import firebase from "firebase";
import * as firebaseui from "firebaseui";

  var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  var app = firebase.initializeApp(firebaseConfig);

  function registerUser(email,password) {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
  
  function loginUser() {
    var email = "test@test.com"
    var password = "test1234"
  
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
