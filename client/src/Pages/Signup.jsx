import React from 'react'
import '../styles/signup.scss'

import { animated } from "react-spring";
import { useHover } from "../customHooks";

export default function Signup() {

    const [animation, setHover] = useHover({
        backgroundTo: 'white',backgroundFrom:'#282C34'
    });

    return (
        <div className="sign-up">
            <form>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="password" placeholder="---@---.com" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="*****"/>
                <animated.button
                    style={animation}
                    onMouseOver={()=>{setHover(true)}}
                    onMouseOut={()=>{setHover(false)}}
                >Sign Up</animated.button>
            </form>
        </div>
    )
}
