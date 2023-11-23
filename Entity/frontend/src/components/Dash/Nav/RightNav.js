import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Nav.css"
import { useSelector } from "react-redux";
import Profile from "../../Profile";

function RightNav({ setProfile, profile }) {
    const [rightNav, setRightNav] = useState(false)
    const user = useSelector(state => state.session.user)
    const rotate = rightNav ? "rotate(180deg)" : "rotate(0)"

    function toggleRightNav() {
        setRightNav(!rightNav)
    }

    function toggleProfile() {
        setProfile(!profile)
        setRightNav(!rightNav)
    }

    return (
        <>
            <button id='right-nav-button' style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={toggleRightNav}><i className="fa-solid fa-chevron-left"></i></button>
            {rightNav &&

                <div className="right-nav-container">
                    <button><i className="fa-regular fa-bell"></i></button>
                    <button><i className="fa-regular fa-envelope"></i></button>
                    <button onClick={toggleProfile}><i className="fa-regular fa-user"></i></button>
                    <button><i className="fa-solid fa-gear"></i></button>
                </div>

            }
        </>
    )
}

export default RightNav
