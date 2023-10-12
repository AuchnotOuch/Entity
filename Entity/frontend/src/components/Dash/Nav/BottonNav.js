import React from "react";
import "./Nav.css"

function BottomNav() {
    return (
        <div className="bottom-nav-container">
            <button><i class="fa-regular fa-bell"></i></button>
            <button><i class="fa-regular fa-envelope"></i></button>
            <button><i class="fa-regular fa-user"></i></button>
            <button><i class="fa-solid fa-gear"></i></button>
        </div>
    )
}

export default BottomNav
