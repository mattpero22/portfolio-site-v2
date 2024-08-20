import React, { useEffect } from "react";

export default function Background () {
        //generate the hex divs
        useEffect(() => {
            for(let i=0; i<100; i++) {
                let hex = document.createElement("div")
                hex.className = "hex0"
                document.getElementById("hexContainer").append(hex)

            }
        }, [])

        return (
            <div id="hexBackgroundComponent">
                <div id="hexContainer">

                </div>
            </div>
                
        )
}
