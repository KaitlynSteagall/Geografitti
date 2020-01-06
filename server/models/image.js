// filler text; we'll obviously set up a different mongo db

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageURL: { type: String, required: true },
      // link to firebase database URL
  imageLocation: { type: Map, of: Number, required: true },
      // location hash
  imageDuration: { type: Number, default: 10 },
      // when queried, use momentJS to add this # to create date to determine expiration
  imageUpvotes: { type: Number, default: 0 },
      // these iterate duration, but we also want to track them just for prestige
  imageNSWF: { type: Number, default: 0 },
      // after a certain threshold, mute this image for people without NSFW checked
  imageAuthor: [{
    // link user id so we can tag & credit images or call galleries by author
    type: Schema.Types.ObjectId,
    ref: 'User' }],
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;