const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    tweet_id: String,
    user_profile_id: String
});

module.exports = Like = mongoose.model("likes", LikeSchema);