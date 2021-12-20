const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
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

module.exports = Tweet = mongoose.model("tweet", TweetSchema);