const mongoose = require("mongoose");
const express = require("express");

const user_profiles = require("./routes/api/user_profile");
const tweets = require("./routes/api/tweets");
const retweets = require("./routes/api/retweets");
const likes = require("./routes/api/likes");
const user_following = require("./routes/api/user_following");

const app = express();

app.use(express.json());

// Connect to Mongo
mongoose.connect('mongodb://localhost/twitter_db')
    .then(() => console.log('Database Connection has been made'))
    .catch((err) => console.log("Database Connection error", error));

// Routes
app.use("/api/user_profiles", user_profiles);
app.use("/api/user_following", user_following);
app.use("/api/likes", likes);
app.use("/api/retweets", retweets);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));