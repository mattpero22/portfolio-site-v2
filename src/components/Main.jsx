import React from "react";

// pages
import Landing from "../pages/Landing";
import About from "../pages/About";
import Experience from "../pages/Experience"
import Contact from "../pages/Contact";
import Education from "../pages/Education";

const Main = (props) => {
    return <div id="mainComponent">
        <Landing />
        <About />
        <Experience />
        <Education />
        <Contact />
    </div>
}

export default Main