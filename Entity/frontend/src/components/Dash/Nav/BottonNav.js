import React, { useState } from "react";
import "./Nav.css"

function BottomNav() {
    const [bottomNav, setBottomNav] = useState(false)
    const rotate = bottomNav ? "rotate(180deg)" : "rotate(0)"

    function toggleBottomNav() {
        setBottomNav(!bottomNav)
    }
    return (
        <>
            <button id='bottom-nav-button' style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={toggleBottomNav}><i className="fa-solid fa-angle-up"></i></button>
            {bottomNav &&
                <div className="bottom-nav-container">
                    <button><i class="fa-regular fa-bell"></i></button>
                    <button><i class="fa-regular fa-envelope"></i></button>
                    <button><i class="fa-regular fa-user"></i></button>
                    <button><i class="fa-solid fa-gear"></i></button>
                </div>
            }
        </>
    )
}

export default BottomNav
