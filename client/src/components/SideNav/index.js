import { Link } from "react-router-dom";
import "./sidenav.css";
import Home from "@mui/icons-material/Home";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import AppLogo from "../AppLogo";

export default function SideNav() {
    return (
        <nav id="side-nav">
            <AppLogo />
            <div className="sidenav__profileDisplay">
                <img src="assets/images/air-max-1.jpg" alt="Profile of Kenny Rogers" />
                <div className="profile-details">
                    <h3 id="profile_name"><Link to="/user-profile">Belinda Marion</Link></h3>
                    <small>@belindamarionk</small>
                    <button className="tweet-post-btn">Tweet Message</button>
                </div>
            </div>
            <ul id="side-nav-links">
                <li className="nav-link">
                    <Home className="sidenav__listItemIcon"/>
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <NotificationsIcon className="sidenav__listItemIcon" />
                    <Link to="/notifications">Notifications</Link>
                </li>
                <li className="nav-link">
                    <SearchIcon className="sidenav__listItemIcon" />
                    <Link to="/search">Search</Link>
                </li>
                <li className="nav-link">
                    <MailOutlineIcon className="sidenav__listItemIcon" />
                    <Link to="/inbox-messages">Messages</Link>
                </li>
                <li className="nav-link">
                    <ListIcon className="sidenav__listItemIcon" />
                    <Link to="/lists">Lists</Link>
                </li>
                <li className="nav-link">
                    <PermIdentityIcon className="sidenav__listItemIcon" />
                    <Link to="/account-settings">Profile</Link>
                </li>
                <li className="nav-link">
                    <LogoutIcon className="sidenav__listItemIcon" />
                    <Link to="/log-out">Logout</Link>
                </li>
            </ul>
        </nav>    
    )
};