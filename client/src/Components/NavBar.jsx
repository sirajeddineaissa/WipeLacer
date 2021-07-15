import React from 'react';
import {useHover} from '../customHooks'
import {animated} from 'react-spring'
import {Link} from 'react-router-dom'

const NavBar = () => {

    const [animation , setHovered]=useHover({
        backgroundFrom:'#282C34',backgroundTo:'white'
    })

    const AnimatedLink = animated(Link);

    return (
        <div className="NavBar">
            <div className="contained">
            <h1 className="logo">
                WipeLacer
            </h1>
            <AnimatedLink style={animation}
                onMouseOver={()=>{setHovered(true)}}
                onMouseOut={()=>{setHovered(false)}}
                to="/signup"
            >
                Sign up
            </AnimatedLink>
            {/* <button >
                {username}
            </button> */}
            </div>
        </div>
    );
}

export default NavBar;
