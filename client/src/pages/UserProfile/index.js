import { Link } from "react-router-dom";
import "./styles.css";

export default function UserProfile() {
    return (
        <div id="user-profile">
            <Link className="back-button" to="/">Return to home</Link>
            <nav id="profile-top-nav">
                <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
                <div className="profile-details">
                    <h1><Link to="/user_profile">Belinda Marion</Link></h1>
                    <h4>@belindamarionk</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi corrupti quaerat dolor necessitatibus</p>
                    <div className="row">
                        <h4 className="profile_location">Kampala, Uganda</h4>
                        <h4 className="profile_followers">300 followers</h4>
                    </div>
                    <button className="tweet-post-btn">Tweet Message</button>
                </div>
            </nav>
            <div id="profile-wrapper">
                <nav id="left-side-nav">
                    <div className="side-nav-link">My Tweets</div>
                    <div className="side-nav-link">My Replies</div>
                    <div className="side-nav-link">Likes</div>
                    <div className="side-nav-link">Lists</div>
                </nav>
                <main id="profile-main-container">
                    <div id="tweets-list"></div>
                </main>
            </div>
        </div>
    )
}