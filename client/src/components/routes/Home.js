import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page .</h1>
            <Link to="/register"> Register</Link>
            <br />
            <Link to="/login"> Login</Link>
            <br />
            <Link to="/dashboard"> Dashboard</Link>
        </div>
    );
};

export default Home;
