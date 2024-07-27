import React, { useEffect } from "react";

export default function Main() {

    useEffect(() => {
        let hex0 = document.getElementsByClassName('hex0');
        let hex0List = [].slice.call(hex0)
        let hex0Set = hex0List.map((e)=>{ return e.innerHTML = '&#x2B22'})        
    }, [])

        return (
            <div id="mainComponent">
                <div className="hex0"></div>
                <div className="hex0"></div>
                <div className="hex0"></div>
                <div className="hex0"></div>
            </div>
        )
}