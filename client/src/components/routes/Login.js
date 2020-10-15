import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    return (
        <main className="main-content">
            <div className="form">
                <h1>Login Page</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username..."
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password..."
                    ></input>
                    <button onClick={() => setIsLoggedIn(true)}>
                        {" "}
                        sign in
                    </button>
                </form>
                <br></br>
                <Link to="/"> back home</Link>
            </div>
        </main>
    );
};

export default Login;
