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
                    <Link to="/"> PLATFORM</Link>
                    <Link to="/"> EDUCATION</Link>
                    <Link to="/"> SUPPORT</Link>
                    <Link to="/"> NEWSLATER</Link>
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
