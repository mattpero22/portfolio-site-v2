import React from "react";

// pages
import Landing from "../pages/Landing";
import About from "../pages/About";
import Experience from "../pages/Experience"
import Contact from "../pages/Contact";

const Main = (props) => {
    return <div id="mainComponent">
        <Landing />
        <About />
        <Experience />
        <Contact />
    </div>
}

export default Main