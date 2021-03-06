const User = require("../models/user");
const Image = require("../models/image");

// create an array of images we can match to our users
const imageSeed = [
  {
    imageURL: `https://cdn.pixabay.com/photo/2017/05/13/22/18/graffiti-2310818_960_720.jpg`,
    imageAuthor: `_id`,
    imageLocation: { lat: 45.5051,
      lng: -122.6750 }
  },
  {
    imageURL: `https://cdn.pixabay.com/photo/2019/09/06/07/48/graffiti-4455812_960_720.jpg`,
    imageAuthor: `_id`,
    imageLocation: { lat: 45.6257,
      lng: -122.6761 }
  },
  {
    imageURL: `https://pixnio.com/free-images/2017/12/12/2017-12-12-16-50-26-1200x730.jpg`,
    imageAuthor: `_id`,
    imageLocation: { lat: 45.5528,
      lng: -122.5608 }
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

// create a function that loops through users, creating User entry and pairing a new Image entry for each
function seedSomeData() {

  // drop databases
  User
    .remove({})
  Image
    .remove({})

  // loop user array, starting at 1 because admin has no associated images
  for (let i = 1; i < userSeed.length; i++) {
    const imageObject = imageSeed[i];
    console.log(`trying to create user from `, userSeed[i])
    User.create(userSeed[i])
      .then(data => {
        imageObject.imageAuthor = data._id;
        console.log(`User created: `, data, `trying to create image `, imageObject);
        Image.create(imageObject)
          .then(data => {
            console.log(`Image created: `, data)
          });
      });
  }
}

// create a function that checks for a full database & creates one if nonexistent
function checkForDatabase() {
  console.log(`successfully called seedDB export`);
  User.find({ firebaseID: `zHORwlltDVc95KJgPJlT8hPH04g1` })
    .then(data => {
      if (!data) {
        seedSomeData();
      }
      else {
        console.log(data.displayName);
      }
    });
};

module.exports = checkForDatabase;