import React, { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../../userContext"
//import login from "../../apiCalls"

const NavBar = () =>  {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    return (
        
        <div className ="topnav">
            <Link className ="active" to="/home">Home</Link>
            <Link  to="/about">About</Link>
            <Link  to="/education">Education</Link> 
            <Link className = "bordered" to="/register">Register</Link>                    
            <div className="login-container">                
                <form >
                    <input className = "bordered" type="text" placeholder="Username" name="username" />
                    <input className = "bordered" type="text" placeholder="Password" name="password" />
                    <button className = "bordered" onClick={() => setIsLoggedIn(true)} type="submit">Login</button>
                </form>
            </div>
        </div>

    )

}

export default NavBar;