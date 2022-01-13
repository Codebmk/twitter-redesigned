import SideNav from "../../components/SideNav";
import tweetsList from "../../data-store/tweets.js";
import "./styles.css";

function Home() {
  return (
    <div id="home">
      <SideNav />
      <div id="main-container">
        <main id="main">
          {/* Post tweet message */}
          <form className="add-tweet-form">
            <textarea type="text" placeholder="Tweet your thoughts" id="tweet-message"></textarea>
            <button id="post-tweet">Send</button>
          </form>

          <div id="tweets-list">
          {/* List of tweets */}
          {tweetsList.map(tweet =>{
            return (
              <div className="tweet-item" key={tweet.id}>
                <div className="profile-img">
                  <img src={`assets/images/${tweet.profile_img}`} alt={`Profile of ${tweet.author}`} />
                </div>
                <div className="tweet-content">
                  <div className="tweet-author-label">
                    <h3 className="tweet-author-name">{tweet.author}</h3>
                    <div className="dot-separator"></div>
                    <h3 className="tweet-author-handle">{tweet.handle}</h3>
                    <div className="dot-separator"></div>
                    <h3 className="tweet-time-created">{tweet.time_created}</h3>
                  </div>
                  <div className="tweet-message">
                    <p>{tweet.text_message}</p>
                    <img src={`assets/images/${tweet.image}`} alt="Profile of Kenny Rogers" />
                  </div>
                  <div className="tweet-social">
                    <span className="icon">
                      <i>Reply</i>{tweet.replies}
                    </span>
                    <span className="icon">
                      <i>Retweet</i>{tweet.retweets}
                    </span>
                    <span className="icon">
                      <i>Like</i>{tweet.likes}
                    </span>
                    <span className="icon">
                      <i>Share</i>
                    </span>
                  </div>
                </div>
              </div>
            )
          })
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
        <h4>My Chats</h4>
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