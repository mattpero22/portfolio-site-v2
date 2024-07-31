import React, { useEffect, useState } from "react";

export default function Landing() {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let constrain = 122;

        function transforms(x, y, el) {
            let box = el.getBoundingClientRect();
            let calcX = -(y - box.y - (box.height / 2)) / constrain;
            let calcY = (x - box.x - (box.width / 2)) / constrain;

            return "perspective(100px) " + " rotateX("+ calcX +"deg) " + " rotateY("+ calcY +"deg) ";

        };

        function transformElement(el, xyEl) {
            el.style.transform  = transforms.apply(null, xyEl);
          }

        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
            window.requestAnimationFrame(() => {
                transformElement(document.getElementById("landingName"), [position.x, position.y, document.getElementById("landingName")])
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

            <div id="cursorPos"><div>

                <p>Cursor X: {position.x}</p>
                <p>Cursor Y: {position.y}</p>
            </div></div>
            {/* <div id="landingBlurb">software engineer, problem solver, team player</div> */}
        </div>
    )
}