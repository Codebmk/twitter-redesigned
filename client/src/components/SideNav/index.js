import { Link } from "react-router-dom";
import "./styles.css";

export default function SideNav() {
    return (
        <nav id="side-nav">
            <ul id="side-nav-links">
                <li className="nav-link">
                    <h2 id="brand-name">Geek Twitter</h2>
                </li>
                <li className="nav-link profile-link">
                    <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
                    <div className="profile-details">
                        <h3 id="profile_name"><Link to="/user-profile">Belinda Marion</Link></h3>
                        <small>@belindamarionk</small>
                        <button className="tweet-post-btn">Tweet Message</button>
                    </div>
                </li>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/notifications">Notifications</Link></li>
                <li className="nav-link"><Link to="/search">Search</Link></li>
                <li className="nav-link"><Link to="/inbox-messages">Inbox</Link></li>
                <li className="nav-link"><Link to="/lists">Lists</Link></li>
                <li className="nav-link"><Link to="/account-settings">Account Settings</Link></li>
                <li className="nav-link"><Link to="/log-out">Logout</Link></li>
            </ul>
        </nav>    
    )
};