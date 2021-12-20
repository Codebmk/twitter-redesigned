const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// Connect to Mongo
mongoose.connect('mongodb://localhost/twitter_db')
    .then(() => console.log('Connection has been made'))
    .catch((err) => console.log("Connection error", error));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));