import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './LoginForm.css'

function LoginFormPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return (
        <Redirect to="/" />
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }

    return (
        <>
            <div className='formContainer'>
            </div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <input
                    type='text'
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    placeholder='Username or Email'
                    required
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                />
                <button type='submit'>Login</button>
            </form>
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

export default LoginFormPage
