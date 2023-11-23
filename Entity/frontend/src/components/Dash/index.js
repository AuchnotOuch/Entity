import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import Profile from '../Profile';
import './Dash.css'


function Dash() {
    const [profile, setProfile] = useState(false)

    return (
        <>
            <Nav profile={profile} setProfile={setProfile} />
            {profile &&
                <Profile />
            }
        </>
    )
}

export default Dash
