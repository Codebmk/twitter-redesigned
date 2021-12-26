const express = require("express");
const router = express.Router();

const UserProfile = require("../../models/user_profile");

// Add New User Profile
router.post('/', (req, res) => {
    const { username, description, date_of_birth, email_address, password, location, website_url, userhandle, isVerified } = req.body;

    // Simple Validation
    if (!username || !description || !userhandle || !password || !date_of_birth) {
        return res.status(400).json({ message: "Please fill in all the required fields!" });
    }

    // Check if Profile already exists
    UserProfile
        .findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ message: "Account already exists" });

            const newUserProfile = new UserProfile({
                username,
                description,
                date_of_birth,
                email_address,
                password,
                location,
                website_url,
                userhandle,
                isVerified
            });

            newUserProfile
                .save()
                .then(user_profile => res.json(user_profile))
        });
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