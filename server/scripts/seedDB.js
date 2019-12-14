const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/db_geograffiti"
);


// create an array of images we can match to our users
const imageSeed = [
  {
    imageURL: `https://cdn.pixabay.com/photo/2017/05/13/22/18/graffiti-2310818_960_720.jpg`,
    imageAuthor: `_id`,
    imageLocation: `42.2808° N, 83.7430° W`
  },
  {
    imageURL: `https://cdn.pixabay.com/photo/2019/09/06/07/48/graffiti-4455812_960_720.jpg`,
    imageAuthor: `_id`,
    imageLocation: `42.2808° N, 83.7430° W`
  },
  {
    imageURL: `https://pixnio.com/free-images/2017/12/12/2017-12-12-16-50-26-1200x730.jpg`,
    imageAuthor: `_id`,
    imageLocation: `47.6062° N, 122.3321° W`
  },
];

// create an array of users we can push to mongo
const userSeed = [
  {
    firebaseID: `zHORwlltDVc95KJgPJlT8hPH04g1`,
    displayName: `admin`,
    viewNSFW: true,
    profilePic: String,
    email: `admin@domain.url`,
  },
  {
    firebaseID: `k7gbceHWT7gTYKeOYu4w59QbOGg1`,
    displayName: `jSheridan`,
    viewNSFW: true,
    profilePic: String,
    email: `jSheridan@domain.url`,
  },
  {
    firebaseID: `hkrA5VWi9VNMuhl0y1oWsH1xWxj1`,
    displayName: `CaptainSpray`,
    viewNSFW: true,
    profilePic: String,
    email: `cDanvers@domain.url`,
  },
  {
    firebaseID: `3VwcSwvwxvdi0hHeh0bGZmUPXA22`,
    displayName: `theTaggingTook`,
    viewNSFW: true,
    profilePic: String,
    email: `peregrin.t@domain.url`,
  },
];

// create a function that loops through users, creating db.user entry and pairing a new db.image entry for each
function seedSomeData() {

  // drop databases
  db.User
    .remove({})
  db.Image
    .remove({})

  // loop user array, starting at 1 because admin has no associated images
  for (let i = 1; i < userSeed.length; i++) {
    const imageObject = imageSeed[i];
    console.log(`trying to create user from `, userSeed[i])
    db.User.create(userSeed[i])
      .then(data => {
        imageObject.imageAuthor = data._id;
        console.log(`User created: `, data, `trying to create image `, imageObject);
        db.Image.create(imageObject)
          .then(data => {
            console.log(`Image created: `, data)
          });
      });
  }
}

module.exports = seedSomeData();