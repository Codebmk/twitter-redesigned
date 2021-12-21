const express = require("express");
const router = express.Router();

const Tweet = require("../../models/tweets");
const UserProfile = require("../../models/user_profile");

// Add New Tweet
router.post('/:user_id', (req, res) => {
    UserProfile
        .findById(req.params.user_id)
        .then(user_profile => {
            const newTweet = new Tweet({
                text_message: req.body.text_message,
                username: user_profile.username,
                author_id: user_profile.id,
                user_location: user_profile.location
            });

            newTweet.save().then(tweet => res.json(tweet));
        });
});


// Get All Tweets
router.get('/', (req, res) => {
    Tweet
        .find()
        .then(tweets => res.json(tweets))
        .catch(err => res.json({message:err}));
});

// Get A Given Tweet
router.get('/:id', (req, res) => {
    Tweet
        .findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(() => res.status(404).json({success:false}));
});

// Delete A Given Tweet
router.delete('/:id', (req, res) => {
    Tweet
        .findById(req.params.id)
        .then(tweet => tweet.remove().then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
});

// Update A Given Tweet
router.put('/update/:id', (req, res) => {
    Tweet
        .findById(req.params.id)
        .then(tweet => tweet
            .update(req.body)
            .then(() => Tweet
                .findById(req.params.id)
                .then(tweet => res.json(tweet))))
        .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;