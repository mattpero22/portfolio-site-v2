import React, { useEffect, useState } from "react";

export default function Landing() {

    // determine mouse position and rotate name based on location
    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        let constrainY = 122;
        let constrainX = 62;
        let nameEle = document.getElementById("landingName")

        let transforms = (x, y, el) => {
            let box = el.getBoundingClientRect();
            let calcX = -(y - box.y - (box.height / 2)) / constrainX;
            let calcY = (x - box.x - (box.width / 2)) / constrainY;
            return "perspective(150px) rotateX("+ calcX +"deg) rotateY("+ calcY +"deg) ";
        };

        let transformElement = (el, xyEl) => {  
            el.style.transform  = transforms.apply(null, xyEl);
        }
        let handleMouseMove = (event) => {
            //get the current location and set state
            setPosition({ x: event.clientX, y: event.clientY });
            window.requestAnimationFrame(() => {
                transformElement(nameEle, [position.x, position.y, nameEle])
            })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [position.x, position.y])



    return (
        <div id="landingView">
            <div className="ripple"></div>
            <div id="landingName"><strong>Matt Pero</strong></div>
            <div id="landingTitle"><strong>Software Engineer</strong></div>
        </div>
    )
}