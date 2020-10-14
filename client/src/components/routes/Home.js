import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <header className="anonymous">
                <ul className="left-side">
                    <li>
                        <Link to="/"> PLATFORM</Link>
                    </li>
                    <li>
                        <Link to="/"> EDUCATION</Link>
                    </li>
                    <li>
                        <Link to="/"> SUPPORT</Link>
                    </li>
                    <li>
                        <Link to="/"> NEWSLATER</Link>
                    </li>
                </ul>
                <ul className="right-side">
                    <li>
                        <Link to="/login"> LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/register"> SIGN UP</Link>
                    </li>
                </ul>
            </header>
            <main className="content">
                <h1>Mmo Home Page</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Banner goes here</h2>
            </main>
            <footer></footer>
        </div>
    );
};

export default Home;
