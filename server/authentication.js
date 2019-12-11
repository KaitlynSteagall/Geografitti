import firebase from "firebase";
import * as firebaseui from "firebaseui";

  var firebaseConfig = {
    apiKey: "AIzaSyCvv26-BN_R7mqNlcks2OPIULLyU2JkyuE",
    authDomain: "geograffiti-f27b5.firebaseapp.com",
    databaseURL: "https://geograffiti-f27b5.firebaseio.com",
    projectId: "geograffiti-f27b5",
    storageBucket: "geograffiti-f27b5.appspot.com",
    messagingSenderId: "900938893685",
    appId: "1:900938893685:web:1d618c2ebefe5678352b3c",
    measurementId: "G-R23BNYJS0E"
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
  firebase.analytics();