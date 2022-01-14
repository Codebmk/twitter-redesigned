import axios from "axios";

export const getTweet = (tweet_id) => {
    axios
        .get(`http://localhost:5000/api/tweets/${tweet_id}`)
        .then(res => {
            return res.data;
        })
        .catch(err => console.log(err));
}

export const getAllTweets = () => {
    axios
        .get('http://localhost:5000/api/tweets')
        .then(res => {
            return res.data;
        })
        .catch(err => console.log(err));
}

export const addTweet = (tweet) => {
    axios
        .post('http://localhost:5000/api/tweets',tweet)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
}