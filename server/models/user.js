// filler text; we'll obviously set up a different mongo db

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firebaseID: { type: String, required: true },
      // firebase handles authentication & password for us, we hook that locally by storing its ID hash
  displayName: { type: String, required: true },
  viewNSFW: { type: Boolean, default: false },
      // does the user want to be alerted to images flagged explicit/upsetting by other users
  profilePic: String,
      // not mandatory; URL link to user-uploaded image stored in firebase
  email: { type: String, required: true },
      // we don't currently have a use for this but we'll keep it for futureproofing
});

const User = mongoose.model("User", userSchema);

module.exports = User;