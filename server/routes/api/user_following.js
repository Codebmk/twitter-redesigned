const express = require("express");
const router = express.Router();

const UserFollowing = require("../../models/user_following");

// Add New Follower for A Given User
router.post('/', (req, res) => {
    const newFollower = new UserFollowing({
        user_followed_id: req.body.user_followed_id,
        user_follower_id: req.body.user_follower_id
    });

    newFollower.save().then(like => res.json(like));
});


// Get All Followers for A Given User
router.get('/:user_id', (req, res) => {
    UserFollowing
        .find({ user_followed_id: req.params.user_id })
        .then(followers => res.json(followers))
        .catch(err => res.json({ message: err }));
});

// Unfollow A Given User
router.delete('/:follower_id/:followed_id', (req, res) => {
    UserFollowing
        .find(
            {
                user_follower_id: req.params.follower_id,
                user_followed_id: req.params.followed_id
            }
        )
        .then(follower => follower
            .remove()
            .then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
});