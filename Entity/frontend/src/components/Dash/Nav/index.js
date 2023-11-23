import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import BottomNav from './BottonNav';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

function Nav({ setProfile, profile }) {

    return (
        <div className='container'>
            <div className='left-container'>
                <LeftNav />
            </div>
            <div className='bottom-container'>
                <BottomNav />
            </div>
            <div className='right-container'>
                <RightNav profile={profile} setProfile={setProfile} />
            </div>
        </div>
    )
}

export default Nav
