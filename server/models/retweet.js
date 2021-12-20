const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RetweetSchema = new Schema({
    original_tweet_id: Number,
    date_of_creation: {
        type: Date,
        default: Date.now()
    },
    text: {
        type: String,
        maxlength: 120
    },
    number_of_likes: Number,
    number_of_retweets: Number,
    number_of_impressions: Number,
    username: String,
    user_location: String,
    author_id: Number
});

module.exports = Retweet = mongoose.model("retweet", RetweetSchema);