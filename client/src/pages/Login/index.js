import { Link } from "react-router-dom";
import "./styles.css";

export default function Login() {
    return (
        <div id="login-wrapper">
            <nav id="login-nav">
                <h4>Geek Twitter</h4>
                <ul id="login-nav-links">
                    <li class="nav-link"><Link to="/login">Login</Link></li>
                    <li class="nav-link"><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
            <form id="login-form">
                <h1>Log In To Your Account</h1>
                <div class="form-input">
                    <label for="email_address">Email Address</label><br/>
                    <input type="text" name="email_address" id="email_address" required />
                </div>
                <div class="form-input">
                    <label for="password">Password</label><br/>
                    <input type="password" name="password" id="password" required />
                </div>
                <button type="button">Login</button>
            </form>
        </div>
    )
}