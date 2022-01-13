const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date
  },
  email_address: {
    type: String,
    required: true,
    unique: true
  },
  date_created: {
    type: Date,
    default: Date.now()
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  description: String,
  location: String,
  website_url: String,
  userhandle: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = UserProfile = mongoose.model(
  "user_profiles",
  UserProfileSchema
);
