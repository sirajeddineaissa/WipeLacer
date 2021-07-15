import React, { useRef,useState } from 'react'
import '../styles/signup.scss'

import { animated } from "react-spring";
import { useHover } from "../customHooks";

import { useAuth } from "../contexts/AuthContext";

export default function Signup() {

    const emailRef = useRef(null);
    const passRef = useRef(null) ;
    
    const { signup } = useAuth()

    const [signupResult, setsignupResult] = useState({
        message:'initial message',
        color:'',
    });

    const [loading, setLoading] = useState(false);
    
    
    const handleSubmit = async (e)=>{
        e.preventDefault() ;
        try{
            console.log('submitting')
            setLoading(true)
            await signup(emailRef.current.value , passRef.current.value) ;
            setLoading(false);
            setsignupResult({
                message:'your account is created',
                color: 'green'
            })
        }
        catch(e){
            setsignupResult({
                message:'there has been an error',
                color: 'red'
            })
            setLoading(false);
        }
    }

    const [animation, setHover] = useHover({
        backgroundTo: 'white',backgroundFrom:'#282C34'
    });

    return (
        <div className="sign-up">
            <form>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" ref={emailRef} placeholder="---@---.com" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" ref={passRef} placeholder="*****" required/>
                <animated.button
                    style={animation}
                    onMouseOver={()=>{setHover(true)}}
                    onMouseOut={()=>{setHover(false)}}
                    onClick ={handleSubmit}
                    disabled={loading}
                >Sign Up</animated.button>
                <div style={{color: signupResult.color,fontSize: '0.5em'}}>
                    {signupResult.message}
                </div>
            </form>
        </div>
    )
}
