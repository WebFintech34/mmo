import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="main-content">
            <div className="form">
                <h1>Register Page</h1>
                <Link to="/"> back home</Link>
            </div>
        </div>
    );
}
