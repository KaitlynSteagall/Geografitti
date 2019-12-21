import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvv26-BN_R7mqNlcks2OPIULLyU2JkyuE",
  authDomain: "geograffiti-f27b5.firebaseapp.com",
  databaseURL: "https://geograffiti-f27b5.firebaseio.com",
  projectId: "geograffiti-f27b5",
  storageBucket: "geograffiti-f27b5.appspot.com",
  messagingSenderId: "900938893685"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}