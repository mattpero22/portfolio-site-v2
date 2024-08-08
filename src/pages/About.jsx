import React from "react";
import Sketch from "../images/ai-sketch.jpg"

const About = () => {
    return (
        <div id="about">
            <img id="portrait"src={Sketch}></img>
            <p id="aboutBlurb">
                <p id="aboutBlurbHeading">Hi.</p>
                I'm Matt, a software engineer from Brooklyn, New York. I was drawn to engineering through robotics, where I saw firsthand the melding of individual ideas into one cohesive solution. Programming has become my passion -- nothing beats the feeling of designing a useful solution to an issue using clever code.
                <br/><br/>
                When I am not coding, I like to escape into the virtual realm with video games, or sink into a good book. To get away from the computer, I enjoy swimming, camping, and spending time with my cat and partner-in-crime, Pebble.
            </p>
        </div>
    )
}

export default About;