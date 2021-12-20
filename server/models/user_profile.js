const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    email_address: {
        type: String,
        required: true
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
    description: {
        type: String
    }
});

module.exports = UserProfile = mongoose.model('user_profile', UserProfileSchema);