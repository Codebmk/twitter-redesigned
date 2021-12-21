const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RetweetSchema = new Schema({
    original_tweet_id: String,
    date_of_creation: {
        type: Date,
        default: Date.now()
    },
    text_message: {
        type: String,
        maxlength: 120
    },
    number_of_likes: Number,
    number_of_retweets: Number,
    number_of_impressions: Number,
    author_username: String,
    author_userlocation: String,
    author_id: String
});

module.exports = Retweet = mongoose.model("retweet", RetweetSchema);