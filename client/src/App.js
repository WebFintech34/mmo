import React, { useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Register from "./components/routes/Register";
import Dashboard from "./components/routes/Dashboard";
import About from "./components/routes/About";
import Education from "./components/routes/Education";
import Default from "./components/routes/Default";
import UserContext from "./userContext";
import { useHistory } from "react-router-dom";
//import { login } from "./apiCalls";

const App = () => {
    let history = useHistory();

    // todo: replace this a valid token implementation
    let [isLoggedIn, setIsLoggedIn] = useState(
        window.localStorage.getItem("isLoggedIn") === "1" ? true : false
    );

    useEffect(() => {
        const isLoggedInStorage = window.localStorage.getItem("isLoggedIn");
        if (
            isLoggedInStorage === "0" &&
            !["/login", "/register"].includes(history.location.pathname)
        ) {
            history.push("/");
        }
    }, [] );

    useEffect(() => {
        const isLoggedInStorage = window.localStorage.getItem("isLoggedIn");
        if (!isLoggedIn && isLoggedInStorage === "1") {
            window.localStorage.setItem("isLoggedIn", "0");
        } else if (
            (isLoggedInStorage === "0" || !isLoggedInStorage) &&
            isLoggedIn
        ) {
            window.localStorage.setItem("isLoggedIn", "1");
        }
    }, [isLoggedIn]);

    return (
        <div className="App">
            <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {isLoggedIn ? (
                
                    <Switch>
                        <Route path="/" component={Dashboard} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route component={Default} />
                    </Switch>
                
            ) : (
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/education" component={Education} />                    
                    <Route path="/" component={Home} />
                </Switch>
            )}
           </UserContext.Provider>
        </div>
    );
};

export default App;
