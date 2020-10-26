import React from "react"
import { Link } from "react-router-dom"

const NavBarBottom  = () => {

    return (

    <div className ="topnav navbottom">
        <Link  to="/home">Terms Privacy Disclaimer</Link>
        <div className="login-container">                
            <form >
                <input className = "bordered" type="text" placeholder="Enter Email" name="username" />
                <button className = "bordered"  type="submit">Subscribe</button>
            </form>
        </div>
    </div>
    
    )

};

export default NavBarBottom;
