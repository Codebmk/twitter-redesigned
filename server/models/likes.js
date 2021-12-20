const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    tweet_id: Number,
    user_profile_id: Number
});

module.exports = Like = mongoose.model("likes", LikeSchema);