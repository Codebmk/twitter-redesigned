import SideNav from "../../components/SideNav";
import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TweetPost from "../../components/TweetPost";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/Gif';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';

function Home() {

  const [tweetsList, setTweetsList] = useState([]);

  useEffect(() => {
    // Get All Tweets
    axios
      .get('http://localhost:5000/api/tweets')
      .then(res => {
        setTweetsList(res.data);
      })
      .catch(err => console.log(err));
  }, [tweetsList]);
  
  return (
    <div id="home">
      <SideNav />
      <div id="main-container">
        <main id="main">
          <header className="home__title">
            <h3>Home</h3>
            <AutoFixHighIcon />
          </header>
          {/* Post tweet message */}
          <form className="add-tweet-form">
            <textarea type="text" placeholder="Tweet your thoughts" id="tweet-message"></textarea>
            <div className="home__postTweetOptions">
              <AddPhotoAlternateIcon className="home__postTweetOptionIcon" />
              <GifIcon className="home__postTweetOptionIcon" />
              <CodeIcon className="home__postTweetOptionIcon" />
              <ArticleIcon className="home__postTweetOptionIcon" />
            </div>
            <button id="post-tweet">Send</button>
          </form>

          <div id="tweets-list">
          {/* List of tweets */}
          {tweetsList ? tweetsList.map(tweet =>{
            return (
              <TweetPost tweet={tweet} />
            )
          })
            : (
              <div className="empty-tweet-list">
                Be the first to tweet
              </div>
            )
          }
            </div>
        </main>
      </div>
      
      <aside id="aside">
        <h4>Suggestions on people to follow</h4>
        <ul className="aside-nav">
          <li className="nav-link">
            <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
            <div className="profile-details">
              <h4>Arthur Kigulu</h4>
              <small>Head of Engineering, Tesla</small>
            </div>
          </li>
          <li className="nav-link">
            <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
            <div className="profile-details">
              <h4>Arthur Kigulu</h4>
              <small>Head of Engineering, Tesla</small>
            </div>
          </li>
          <li className="nav-link">
            <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
            <div className="profile-details">
              <h4>Arthur Kigulu</h4>
              <small>Head of Engineering, Tesla</small>
            </div>
          </li>
        </ul>
        <h4>You may also like these</h4>
        <ul className="aside-nav">
            <li className="nav-link">
                <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
                <div className="profile-details">
                    <h4>Arthur Kigulu</h4>
                    <small>Head of Engineering, Tesla</small>
                </div>
            </li>
            <li className="nav-link">
                <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
                <div className="profile-details">
                    <h4>Arthur Kigulu</h4>
                    <small>Head of Engineering, Tesla</small>
                </div>
            </li>
            <li className="nav-link">
                <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
                <div className="profile-details">
                    <h4>Arthur Kigulu</h4>
                    <small>Head of Engineering, Tesla</small>
                </div>
            </li>
        </ul>
    </aside>
    </div>
  );
}

export default Home;
