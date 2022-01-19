import React from 'react';
import { Link } from "react-router-dom";
import AppLogo from '../AppLogo';
import "./authnavbar.css";

function AuthNavbar() {
    return (
        <nav className="authnavbar">
            <div className="authnavbar__navBrand">
                <AppLogo />
                <h3>Geek Twitter</h3>
            </div>
            <ul className="authnavbar__navbarLinks">
                <li className="authnavbar__navbarLink"><Link to="/login">Login</Link></li>
                <li className="authnavbar__navbarLink"><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default AuthNavbar;
