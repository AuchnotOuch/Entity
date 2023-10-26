import React, { useState } from "react";
import "./Nav.css"

function BottomNav() {
    const [bottomNav, setBottomNav] = useState(false)
    const [universe, setUniverse] = useState(false)
    const rotate = bottomNav ? "rotate(180deg)" : "rotate(0)"

    function toggleBottomNav() {
        setBottomNav(!bottomNav)
    }

    function toggleUniverse() {
        setUniverse(!universe)
    }

    return (
        <>
            <button id='bottom-nav-button' style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={toggleBottomNav}><i className="fa-solid fa-angle-up"></i></button>
            {bottomNav &&
                <div className="bottom-nav-container">
                    <button><i className="fa-solid fa-arrow-left-long"></i></button>
                    <button><i className="fa-solid fa-circle"></i></button>
                    <button><i className="fa-solid fa-arrow-right-long"></i></button>
                </div>
            }
        </>
    )
}

export default BottomNav
