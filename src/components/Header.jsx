import React, { useEffect, useState } from "react";

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
        <div id="headerLogo">
            matt pero
        </div>
        {
            menuOptions ? (<>
                            <div className="headerTab">
                                About
                            </div>
                            <div className="headerTab">
                                Experience
                            </div>
                            <div className="headerTab">
                                Contact
                            </div>
                          </>) 
                        : (<div id="headerTabDropdown" className="headerTab">
                                &#9776;
                          </div>)
        }

    </header>
    )
}

export default Header;
