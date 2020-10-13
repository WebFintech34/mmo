import React, { Component, useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Register from "./components/routes/Register";
import Login from "./components/routes/Login";
import Dashboard from "./components/routes/Dashboard";
import Default from "./components/routes/Default";
import UserContext from "./userContext";
import { useHistory } from "react-router-dom";
import { login } from "./apiCalls";

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
    }, []);

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
            {isLoggedIn ? (
                <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                    <Switch>
                        <Route path="/" component={Dashboard} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route component={Default} />
                    </Switch>
                </UserContext.Provider>
            ) : (
                <Switch>
                    <Route
                        path="/login"
                        render={(props) => (
                            <Login
                                {...props}
                                setIsLoggedIn={setIsLoggedIn}
                            ></Login>
                        )}
                    />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/" component={Home} />
                </Switch>
            )}
        </div>
    );
};

export default App;
