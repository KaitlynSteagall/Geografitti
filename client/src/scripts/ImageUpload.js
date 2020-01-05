import React, {Component} from 'react';
import {storage} from '../../firebase';

function ImageUpload(file) {
  // create (and thus automatically fire) an upload to firebase
  const uploadTask = storage.ref(`images/${file.name}`)
    .put(file);
  
  uploadTask.on(`state_changed`,
    // first callback promises file progress
    (snapshot) => {
      // if we ever decide to do anything with progress data put it here. could make a little spinny color wheel like it's 2003 again.
    },
    // next callback is error data
    (error) => {
      console.log(`upload error: `, error);
    },
    // final callback fires when the upload is done
    () => {
      // look for the file in the location we just defined
      storage.ref(`images`)
        .child(file.name)
        .getDownloadURL()
        .then(url => {
          // axios call to tell mongo server about the new file goes here
          // for now for testing purposes just throw in a console.log
          console.log(`saved new file at ${url}`);
        })
    }
  )
}

export default ImageUpload;