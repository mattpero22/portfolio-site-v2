import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

const TopButton = () => {

    const [showButton, setShowButton] = useState(false)
    const handleShowButton = () => {
        setShowButton(Math.abs(document.getElementById('landing').getBoundingClientRect().top) > 250)
    }
    useEffect(() => {
        document.getElementsByClassName("App")[0].addEventListener("scroll", handleShowButton)
        return () => { document.getElementsByClassName("App")[0].removeEventListener("scroll", handleShowButton) }
    })


    return (
        <HashLink id={"topButton"} className={`headerTab ${showButton ? "show" : "hide"}` } smooth to="/#landing">&#8593;</HashLink>
    )
}

export default TopButton;