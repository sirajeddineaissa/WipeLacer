import React,{useRef,useState} from 'react'
import { Link, useHistory } from 'react-router-dom';

import { useHover } from '../customHooks';
import { animated } from 'react-spring';
import { useAuth } from '../contexts/AuthContext';
import HomeButton  from '../Components/HomeButton';

export default function Login() {

    const emailRef = useRef(null);
    const passRef = useRef(null) ;

    const history = useHistory();
    const {login} = useAuth(); 

    const [loading, setLoading] = useState(false);
    const [loginResult, setLoginResult] = useState({
        message:'',color:''
    })
    const [animation, setHover] = useHover({
        backgroundTo: 'white',backgroundFrom:'#282C34'
    });

    const handleSubmit=async(e)=>{
        e.preventDefault() ; 
        try{
            console.log('submitting')
            setLoading(true)
            await login(emailRef.current.value , passRef.current.value) ;
            console.log("trueeee")
            setLoading(false);
            history.push('/');
        }
        catch(e){
            setLoading(false);
            console.log(e)
            setLoginResult({
                message:'there has been an error',
                color: 'red'
            })
        }
    }

    return (
        <div className="sign-up">
            <HomeButton/>
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
                >Log In</animated.button>
                <div style={{color: loginResult.color,fontSize: '0.5em'}}>
                    {loginResult.message}
                </div>
                <p style={{fontSize: '0.8rem'}}>already have an account ? <Link to="/signup" style={{color:'lightblue'}}>Sign Up</Link></p>
            </form>
        </div>
    )
}
