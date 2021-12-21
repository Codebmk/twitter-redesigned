const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserFollowingSchema = new Schema({
    user_followed_id: String,
    user_follower_id: {
        type: String,
        unique: true
    }
});

module.exports = UserFollowing = mongoose.model("user_following", UserFollowingSchema);