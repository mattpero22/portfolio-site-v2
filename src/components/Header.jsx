import React, { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const [menuOptions, setMenuOptions] = useState(window.innerWidth > 480)
    
    const handleMenuOptions = () => {
        setMenuOptions(window.innerWidth > 480)
    }
    useEffect(() => {
        window.addEventListener("resize", handleMenuOptions)
        return () => { window.removeEventListener("resize", handleMenuOptions) }
    })

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
