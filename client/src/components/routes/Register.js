import React, {useState} from "react";
//import { Link } from "react-router-dom";
import {register} from "../../apiCalls"
import NavBarBottom from "../NavBars/NavBarBottom"
import NavBar from "../NavBars/NavBar"

// See https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation css and or js for form 

const Register = () => {
    
    const [formData,setFormData] = useState({
        "username": "",
        "email": "",
        "password": ""
    })

    const handleRegister = () => {
        let result = register('user/create', formData)
        if(result.statusCode == 200) {
                // redirect to relevant eg thank you register, eg home, eg dashboard 
        }
    }

    const handleChange = (e)  => {
        setFormData(last => ({...last,[e.target.name]:e.target.value}))
    }

    return (
        <>
        <NavBar />
        <form >
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label for="username"><b>Email</b></label>
                <input value = {formData["username"]} 
                   onChange = {handleChange}   type="text" placeholder="Your UserName" name="username" id="username" required/>

                <label for="email"><b>Email</b></label>
                <input value = {formData["email"]} 
                   onChange = {handleChange}   type="text" placeholder="Enter Email" name="email" id="email" required/>

                <label for="psw"><b>Password</b></label>
                <input value = {formData["password"]} 
                    onChange = {handleChange} type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input value = {formData["password"]} 
                     onChange = {handleChange} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                <hr/>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button onClick = {handleRegister} type="submit" class="registerbtn">Register</button>
            </div>
            
            <div class="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </form>
        <NavBarBottom/>
        </>
    );
}

export default Register;