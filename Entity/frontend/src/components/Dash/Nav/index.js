import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import BottomNav from './BottonNav';

function Nav() {
    const [bottomNav, setBottomNav] = useState(false)
    const rotate = bottomNav ? "rotate(180deg)" : "rotate(0)"

    function toggleBottomNav() {
        setBottomNav(!bottomNav)
    }

    return (
        <div className='container'>
            <button id='bottom-nav-button' style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={toggleBottomNav}><i class="fa-solid fa-angle-up"></i></button>
            {bottomNav &&
                <BottomNav />
            }
        </div>
    )
}

export default Nav
