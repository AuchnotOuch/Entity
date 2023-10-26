import React, { useState } from "react";
import "./Nav.css"

function RightNav() {
    const [rightNav, setRightNav] = useState(false)
    const rotate = rightNav ? "rotate(180deg)" : "rotate(0)"

    function toggleRightNav() {
        setRightNav(!rightNav)
    }
    return (
        <>
            <button id='right-nav-button' style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={toggleRightNav}><i class="fa-solid fa-chevron-left"></i></button>
            {rightNav &&
                <div className="right-nav-container">
                    <button><i class="fa-regular fa-bell"></i></button>
                    <button><i class="fa-regular fa-envelope"></i></button>
                    <button><i class="fa-regular fa-user"></i></button>
                    <button><i class="fa-solid fa-gear"></i></button>
                </div>
            }
        </>
    )
}

export default RightNav
