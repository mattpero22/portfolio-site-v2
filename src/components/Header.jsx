import React, { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    // state and handler to display condensesed menu on smaller screens (below 768 to match the tablet media query in App.css)
    const [menuOptions, setMenuOptions] = useState(window.innerWidth > 768)
    const handleMenuOptions = () => {
        setMenuOptions(window.innerWidth > 768)
    }
    useEffect(() => {
        window.addEventListener("resize", handleMenuOptions)
        return () => { window.removeEventListener("resize", handleMenuOptions) }
    })


    // state and handler for click event on the condensed menu
    const [menuClick, setMenuClick] = useState(false)
    const handleMenuClick = () => {
        // flip the state on click
        setMenuClick(!menuClick)
    }

    // state and handler to hide the nav bar when not at top of app
    const [showNav, setShowNav] = useState(true)
    const handleShowNav = () => {
        setShowNav(Math.abs(document.getElementById('landing').getBoundingClientRect().top) < 250)
    }
    useEffect(() => {
        document.getElementsByClassName("App")[0].addEventListener("scroll", handleShowNav)
        return () => { document.getElementsByClassName("App")[0].removeEventListener("scroll", handleShowNav) }
    })

    //state and handler to remember previous page and navigate to it on back button press
    // const [pageViews, setPageViews] = useState()

    return (
        <header id="headerComponent" className={showNav ? "show" : "hide"}>
            <HashLink id={"headerLogo"} smooth to="/#landing">MP</HashLink>
            <div id="headerTabGroup">
                {
                    menuOptions ? (<>
                        <HashLink className={"headerTab"} smooth to="/#about">About</HashLink>
                        <HashLink className={"headerTab"} smooth to="/#experience">Experience</HashLink>
                        <HashLink className={"headerTab"} smooth to="/#experience">Education</HashLink>
                        {/* <HashLink className={"headerTab"} smooth to="/#testimony">Testimonials</HashLink>
                        <HashLink className={"headerTab"} smooth to="/#contact">Contact</HashLink> */}
                    </>)
                        : (<div className="hamburger-icon" id="icon" onClick={handleMenuClick}>
                            <div className={!menuClick ? "icon-1" : "a icon-1"} id="a"></div>
                            <div className={!menuClick ? "icon-2" : "c icon-2"} id="b"></div>
                            <div className={!menuClick ? "icon-3" : "b icon-3"} id="c"></div>
                            <div className="clear"></div>
                          </div>)
                }
            </div>

            <div id="headerTabOptions" className={menuClick ? "show_menuOptions" : "hide_menuOptions"}></div>

        </header>
    )
}

export default Header;
