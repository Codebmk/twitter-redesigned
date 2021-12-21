const express = require("express");
const router = express.Router();

const UserProfile = require("../../models/user_profile");

// Add New User Profile
router.post('/', (req, res) => {
    const newUserProfile = new UserProfile({
        username: req.body.username,
        description: req.body.description,
        date_of_birth: req.body.date_of_birth,
        email_address: req.body.email_address,
        password: req.body.password,
        location: req.body.location,
        website_url: req.body.website_url,
        userhandle: req.body.userhandle,
        isVerified: req.body.isVerified
    });
    newUserProfile
        .save()
        .then(user_profile => res.json(user_profile));
});


// Get All User Profiles
router.get('/', (req, res) => {
    UserProfile
        .find()
        .then(user_profiles => res.json(user_profiles))
        .catch(err => res.json({message:err}));
});

// Get A Given User Profiles
router.get('/:id', (req, res) => {
    UserProfile
        .findById(req.params.id)
        .then(user_profile => res.json(user_profile))
        .catch(() => res.status(404).json({success:false}));
});

// Delete A Given User Profiles
router.delete('/:id', (req, res) => {
    UserProfile
        .findById(req.params.id)
        .then(user_profile => user_profile.remove().then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
});

// Update A Given User Profiles
router.put('/update/:id', (req, res) => {
    UserProfile
        .findById(req.params.id)
        .then(user_profile => user_profile
            .update(req.body)
            .then(() => UserProfile
                .findById(req.params.id)
                .then(user_profile => res.json(user_profile))))
        .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;