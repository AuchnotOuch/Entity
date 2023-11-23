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
                    <button><i className="fa-solid fa-building-columns"></i></button>
                    <button><i className="fa-solid fa-chalkboard-user"></i></button>
                    <button><i className="fa-solid fa-people-group"></i></button>
                    <button><i className="fa-solid fa-location-pin"></i></button>
                    <button><i className="fa-solid fa-user-astronaut"></i></button>
                </div>
            }
        </>
    )
}

export default LeftNav
