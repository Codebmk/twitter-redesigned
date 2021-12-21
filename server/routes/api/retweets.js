const express = require("express");
const router = express.Router();

const Retweet = require("../../models/retweet");

// Add New Retweet
router.post('/:user_id/:tweet_id', (req, res) => {
    const newRetweet = new Retweet({
        text_message: req.body.text_message,
        author_id: req.params.user_id,
        original_tweet_id: req.params.tweet_id,
        author_userlocation: user_profile.location
    });

    newRetweet.save().then(retweet => res.json(retweet));
});


// Get All Retweets
router.get('/', (req, res) => {
    Retweet
        .find()
        .then(retweets => res.json(retweets))
        .catch(err => res.json({message:err}));
});

// Get A Given Retweet
router.get('/:id', (req, res) => {
    Retweet
        .findById(req.params.id)
        .then(retweet => res.json(retweet))
        .catch(() => res.status(404).json({success:false}));
});

// Delete A Given Retweet
router.delete('/:id', (req, res) => {
    Retweet
        .findById(req.params.id)
        .then(retweet => retweet.remove().then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
});

// Update A Given Retweet
router.put('/update/:id', (req, res) => {
    Retweet
        .findById(req.params.id)
        .then(retweet => retweet
            .update(req.body)
            .then(() => Retweet
                .findById(req.params.id)
                .then(retweet => res.json(retweet))))
        .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;