import React, { useState } from "react";

function LeftNav() {
    const [leftNav, setLeftNav] = useState(false)
    const rotate = leftNav ? "rotate(180deg)" : "rotate(0)"

    function toggleLeftNav() {
        setLeftNav(!leftNav)
    }
    return (
        <>
            <button id='left-nav-button' style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={toggleLeftNav}><i className="fa-solid fa-chevron-right"></i></button>
            {leftNav &&
                <div className="left-nav-container">
                    <button><img src="/images/planet.svg"></img></button>
                    <button><img src="/images/solar-system.svg"></img></button>
                    <button><img src="/images/galaxy.svg"></img></button>
                </div>
            }
        </>
    )
}

export default LeftNav
