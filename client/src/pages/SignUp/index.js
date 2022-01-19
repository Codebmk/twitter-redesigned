import axios from "axios";
import { useState } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import "./signup.css";

export default function SignUp() {
    const [username, setUserName] = useState("");
    const [userhandle, setUserHandle] = useState("");
    const [location, setLocation] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const [matchingPasswords, setMatchingPasswords] = useState(false);

    const createNewAccount = (e) => {
        e.preventDefault();

        if (matchingPasswords) {
            if (!username || !userhandle || !emailAddress || !description) {
                console.log("Error...");
            } else {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const body = JSON.stringify({
                    username,
                    description,
                    email_address: emailAddress,
                    password,
                    location,
                    userhandle,
                });
                
                axios
                    .post("http://localhost:5000/api/user_profiles", body,config)
                    .then(res => {
                        setToken(res.data.token);
                    })
                    .catch(err => console.log("Please try again later!"));
            };
        }   
    }

    return (
        <div id="signup">
            <AuthNavbar />
            <form id="signup-form" onSubmit={createNewAccount}>
                <h1>Create Your Account Today.</h1>
                <div className="form-input-row">
                    <div className="form-input-row-item">
                        <label htmlFor="user_name">User Name</label><br/>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            required
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-input-row-item">
                        <label htmlFor="account_handle">Account Handle</label><br/>
                        <input
                            type="text"
                            name="account_handle"
                            id="account_handle"
                            required 
                            onChange={(e) => {
                                setUserHandle(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="location">Location</label><br/>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        required
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="email_address">Email Address</label><br/>
                    <input
                        type="email"
                        name="email_address"
                        id="email_address"
                        required 
                        onChange={(e) => {
                            setEmailAddress(e.target.value);
                        }}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="bio_descr">Bio</label><br/>
                    <input
                        type="text"
                        placeholder="Briefly describe yourself"
                        name="bio_descr"
                        id="bio_descr"
                        required 
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </div>
                <div className="form-input-row">
                    <div className="form-input-row-item">
                        <label htmlFor="password">Password</label><br/>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-input-row-item">
                        <label htmlFor="password">Confirm Password</label><br/>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            required 
                            onChange={(e) => {
                                if(e.target.value !== password){
                                    console.log("Make sure passwords are matching!");
                                } else {
                                    setMatchingPasswords(true);
                                }
                            }}
                        />
                    </div>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};