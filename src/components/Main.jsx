import React from "react";

// pages
import Landing from "../pages/Landing";
import About from "../pages/About";
import Experience from "../pages/Experience"
//import Contact from "../pages/Contact";
import Education from "../pages/Education";
//import Testimony from "../pages/Testimony";

const Main = (props) => {
    return <div id="mainComponent">
        <Landing />
        <About />
        <Experience />
        <Education />
    </div>
}

export default Main