import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="home-page">
            <header className="anonymous">
                <i
                    onClick={() => setShowMenu(!showMenu)}
                    className="fas fa-2x fa-bars"
                ></i>
                {showMenu && (
                    <i
                        onClick={() => setShowMenu(!showMenu)}
                        className="fas fa-2x fa-times"
                    ></i>
                )}
                <nav
                    className={`anonymous-top ${
                        showMenu ? "anonymous-top-show" : "anonymous-top-hide"
                    }`}
                >
                    <Link to="/login"> LOGIN</Link>
                    <Link to="/register"> SIGN UP</Link>
                </nav>
            </header>
            <main className="banner main-content">
                <div>
                    <h1>Mmo Home Page</h1>
                    <h1> Banner goes here</h1>
                </div>
            </main>
            <div class="contact-subscribe">
                <h3>Subscribe to our newsletter</h3>
                <form id="mc-form" class="group mc-form" novalidate="true">
                    <input
                        type="email"
                        value=""
                        name="EMAIL"
                        class="email"
                        id="mc-email"
                        placeholder="Email
                        Address"
                        required=""
                    />
                    <input type="submit" name="subscribe" value="Subscribe" />
                    <label for="mc-email" class="subscribe-message"></label>
                </form>
            </div>
            <footer className="anonymous">
                {/* <nav className="anonymous-bottom">
                    <Link to="/"> PLATFORM</Link>
                    <Link to="/"> EDUCATION</Link>
                </nav> */}
            </footer>
        </div>
    );
};

export default Home;
