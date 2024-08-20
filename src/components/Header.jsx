import React, { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    // state and handler to create a condensesed hamburger menu on smaller screens
    const [menuOptions, setMenuOptions] = useState(window.innerWidth > 480)
    const handleMenuOptions = () => {
        setMenuOptions(window.innerWidth > 550)
    }
    useEffect(() => {
        window.addEventListener("resize", handleMenuOptions)
        return () => { window.removeEventListener("resize", handleMenuOptions) }
    })

    //state and handler to remember previous page and navigate to it on back button press
    const [pageViews, setPageViews] = useState()

    return (
        <header id="headerComponent">
            <HashLink id={"headerLogo"} smooth to="/#">matt pero</HashLink>
        {
            menuOptions ? (<>
                                <HashLink className={"headerTab"} smooth to="/#about">About</HashLink>
                                <HashLink className={"headerTab"} smooth to="/#experience">Experience</HashLink>
                                <HashLink className={"headerTab"} smooth to="/#contact">Contact</HashLink>
                          </>) 
                        : (<div id="headerTabDropdown" className="headerTab">
                                &#9776;
                          </div>)
        }

    </header>
    )
}

export default Header;
