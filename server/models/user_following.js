const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserFollowingSchema = new Schema({
    user_following_id: Number,
    user_follower_id: Number
});

module.exports = UserFollowing = mongoose.model("user_following", UserFollowingSchema);