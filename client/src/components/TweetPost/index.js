import "./tweetpost.css";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import moment from 'moment';

const TweetPost = ({ tweet }) => {
    return (
        <div className="tweet-item" key={tweet._id}>
            <div className="profile-img">
                <img src="assets/images/air-max-1.jpg" alt={`Profile of ${tweet.username}`} />
            </div>
            <div className="tweet-content">
                <div className="tweet-author-label">
                    <h3 className="tweet-author-name">{tweet.username}</h3>
                    <div className="dot-separator"></div>
                    <h3 className="tweet-author-handle">{tweet.user_location}</h3>
                    <div className="dot-separator"></div>
                    <h3 className="tweet-time-created">{moment(tweet.date_of_creation, "hmm").format("LT")}</h3>
                </div>
                <div className="tweet-message">
                    <p>{tweet.text_message}</p>
                    <img src="assets/images/joy.jpg" alt="Profile of Kenny Rogers" />
                </div>
                <div className="tweet-social">
                    <ChatBubbleIcon />{tweet.replies}
                    <RepeatIcon />{tweet.retweets}
                    <FavoriteBorderIcon />{tweet.likes}
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
};

export default TweetPost;