const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const UserProfile = require("../../models/user_profile");

// Add New User Profile
router.post('/', (req, res) => {
    const { username, description, date_of_birth, email_address, password, location, website_url, userhandle, isVerified } = req.body;

    // Simple Validation
    if (!username || !description || !email_address || !password || !userhandle) {
        return res.status(400).json({ message: "Please fill in all the required fields!" });
    }

    // Check if Profile already exists
    UserProfile
        .findOne({ email_address })
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

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUserProfile.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUserProfile.password = hash;
                    newUserProfile
                        .save()
                        .then(user_profile => res.json({
                            user: {
                                id: user_profile.id,
                                username: user_profile.username,
                                description: user_profile.description,
                                email_address: user_profile.email_address,
                                location: user_profile.location,
                                date_of_birth: user_profile.date_of_birth,
                                isVerified: user_profile.isVerified,
                                user_handle: user_profile.userhandle,
                                website_url: user_profile.website_url
                            }
                        }));
                })
            });

            
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