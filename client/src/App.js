import React, { Component } from 'react'
import {Switch,  Route}     from "react-router-dom";
import './App.css'

import Home      from "./components/Home";
import Register  from "./components/Register";
import Login     from "./components/Login";
import Dashboard from "./components/Dashboard";
import Default   from "./components/Default";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route  path = "/home"            component = {Home} />
          <Route  path = "/register"        component = {Register} />
          <Route  path = "/login"           component = {Login} />
          <Route  path = "/dashboard"       component = {Dashboard} />          
          <Route  path = "/"                component = {Home} />
          <Route  component = {Default} /> 	
        </Switch>

      </div>
    );
  }
}

export default App