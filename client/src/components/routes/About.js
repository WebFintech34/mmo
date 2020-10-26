import React from "react"
import NavBar from "../NavBars/NavBar"
import NavBarBottom from "../NavBars/NavBarBottom"

const About = () =>  {

    return (
        <>
        <NavBar />
        <div className="row">
            <div className="video">
                <div class="video-responsive">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/8IKGLg-XZXI" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <NavBarBottom/>
        </>

    )

}

export default About;