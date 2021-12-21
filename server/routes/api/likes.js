const express = require("express");
const router = express.Router();

const Like = require("../../models/likes");

// Add New Like Record for A Given Tweet
router.post('/:user_id/:tweet_id', (req, res) => {
    const newLike = new Like({
        tweet_id: req.params.tweet_id,
        user_profile_id: req.params.user_id
    });

    newLike.save().then(like => res.json(like));
});


// Get All Like Records for A Given User
router.get('/:user_id', (req, res) => {
    Like
        .find({user_profile_id:req.params.user_id})
        .then(likes => res.json(likes))
        .catch(err => res.json({message:err}));
});

// Get Like Records for A Given Tweet
router.get('/:tweet_id', (req, res) => {
    Like
        .find({tweet_id:req.params.tweet_id})
        .then(likes => res.json(likes))
        .catch(() => res.status(404).json({success:false}));
});

// Delete A Given Like Record for A Given User
router.delete('/:user_id/:tweet_id', (req, res) => {
    Like
        .find({ user_profile_id: req.params.user_id, tweet_id: req.params.tweet_id })
        .then(like => like.remove().then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
});