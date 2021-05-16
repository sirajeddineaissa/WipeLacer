import React from 'react';
import '../styles/NavBar.scss'
import {useHover} from '../customHooks'
import {animated} from 'react-spring'

const NavBar = () => {

    const [animation , setHovered]=useHover({
        backgroundFrom:'#282C34',backgroundTo:'white'
    })

    return (
        <div className="NavBar">
            <h1 className="logo">
                WipeLacer
            </h1>
            <animated.a style={animation}
                onMouseOver={()=>{setHovered(true)}}
                onMouseOut={()=>{setHovered(false)}}
            >
                Sign up
            </animated.a>
            {/* <button >
                {username}
            </button> */}
        </div>
    );
}

export default NavBar;
