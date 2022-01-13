import { Link } from "react-router-dom";
import "./styles.css";

export default function SignUp() {
    return (
        <div id="signup-wrapper">
            <nav id="login-nav">
                <h4>Geek Twitter</h4>
                <ul id="login-nav-links">
                    <li class="nav-link"><Link to="/login">Login</Link></li>
                    <li class="nav-link"><Link to="/signup">Sign Up</Link></li>

                </ul>
            </nav>
            <form id="signup-form">
                <h1>Create Your Account Today.</h1>
                <div class="form-input-row">
                    <div class="form-input-row-item">
                        <label for="user_name">User Name</label><br/>
                        <input type="text" name="user_name" id="user_name" required />
                    </div>
                    <div class="form-input-row-item">
                        <label for="account_handle">Account Handle</label><br/>
                        <input type="text" name="account_handle" id="account_handle" required />
                    </div>
                </div>
                <div class="form-input">
                    <label for="location">Location</label><br/>
                    <input type="text" name="location" id="location" required />
                </div>
                <div class="form-input">
                    <label for="email_address">Email Address</label><br/>
                    <input type="text" name="email_address" id="email_address" required />
                </div>
                <div class="form-input">
                    <label for="bio_descr">Bio</label><br/>
                    <input type="text" placeholder="Briefly describe yourself" name="bio_descr" id="bio_descr" required />
                </div>
                <div class="form-input-row">
                    <div class="form-input-row-item">
                        <label for="password">Password</label><br/>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div class="form-input-row-item">
                        <label for="password">Confirm Password</label><br/>
                        <input type="password" name="password" id="password" required />
                    </div>
                </div>
                <button type="button">Sign Up</button>
            </form>
        </div>
    )
};