import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import './Dash.css'


function Dash() {
    return (
        <>
            <div className='frame'></div>
            <Nav />
            <svg>
                <filter id='effect'>
                    <feTurbulence x='0' y='0' baseFrequency={0.09} numOctaves={5} seed={2}>
                        <animate attributeName='baseFrequency' dur={50} values='0.02;0.003;0.02;' repeatCount="indefinite"></animate>
                    </feTurbulence>
                    <feDisplacementMap in='SourceGraphic' scale={30}></feDisplacementMap>
                </filter>
            </svg>
        </>
    )
}

export default Dash
