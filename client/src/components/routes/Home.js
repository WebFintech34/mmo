import React from "react"
import Intro from "../HomeComponents/Intro"
import NavBar from "../NavBars/NavBar"
import NavBarBottom from "../NavBars/NavBarBottom"

const Home = () => {
    
    return (
        <>
            <NavBar />
            <Intro/>
            <NavBarBottom/>
        </>
    );
};

export default Home;
