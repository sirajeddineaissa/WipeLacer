import React, { useRef, useState } from 'react'
import HomeButton from '../components/HomeButton';

import '../styles/signup.scss'

import { useHistory, Link } from "react-router-dom";

import { animated } from "react-spring";
import { useHover } from "../customHooks";

import { useAuth } from "../contexts/AuthContext";

export default function Signup() {

    //refs for inputs
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const repeatRef = useRef(null);

    //auth signup and history
    const history = useHistory()
    const { signup } = useAuth()

    const [loading, setLoading] = useState(false);

    //states
    const [signupResult, setsignupResult] = useState({
        message: '',
        color: '',
    });


    //onclicking sign up button
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emailRef.current.value, passRef.current.value)
        if (repeatRef.current.value !== passRef.current.value) {
            setsignupResult({
                message: 'passwords do not match',
                color: 'red'
            })
            return;
        }
        try {
            console.log('submitting')
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value);
            setLoading(false);
            history.push('/');
        }
        catch (e) {
            setLoading(false);
            setsignupResult({
                message: 'there has been an error',
                color: 'red'
            })
        }
    }

    //animaiton hooks
    const [animation, setHover] = useHover({
        backgroundTo: 'white', backgroundFrom: '#282C34'
    });

    return (
        <div className="sign-up">
            <HomeButton />
            <form>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" ref={emailRef} placeholder="---@---.com" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" ref={passRef} placeholder="*****" required />
                <label htmlFor="repeat">Repeat Password</label>
                <input type="password" name="repeat" id="repeat" ref={repeatRef} placeholder="*****" required />
                <animated.button
                    style={animation}
                    onMouseOver={() => { setHover(true) }}
                    onMouseOut={() => { setHover(false) }}
                    onClick={handleSubmit}
                    disabled={loading}
                >Sign Up</animated.button>
                <div style={{ color: signupResult.color, fontSize: '0.5em' }}>
                    {signupResult.message}
                </div>
                <p style={{ fontSize: '0.8rem' }}>already have an account ? <Link to="/login" style={{ color: 'lightblue' }}>Log In</Link></p>
            </form>
        </div>
    )
}
