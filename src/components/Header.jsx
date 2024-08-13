import React, { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    // state and handler to create a condensesed menu on smaller screens (below 550 px)
    const [menuOptions, setMenuOptions] = useState(window.innerWidth > 550)
    const handleMenuOptions = () => {
        setMenuOptions(window.innerWidth > 550)
    }
    useEffect(() => {
        window.addEventListener("resize", handleMenuOptions)
        return () => { window.removeEventListener("resize", handleMenuOptions) }
    })

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
                        : (<div id="headerTabDropdown" className="headerTab">
                            &#9776;
                        </div>)
                }
            </div>

        </header>
    )
}

export default Header;
