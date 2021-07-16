import React from 'react';
import {useHover} from '../customHooks'
import {animated} from 'react-spring'
import {Link} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {

    const {currentUser, logout} = useAuth();


    const handleLogOut = async()=>{
        await logout()
    }

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

            {currentUser?
                (
                    <div style={{display : 'flex', columnGap: '20px' , alignItems:'center'}}>
                        <h2>
                            {currentUser.email}
                        </h2>
                        <animated.button style={animation}
                            onMouseOver={()=>{setHovered(true)}}
                            onMouseOut={()=>{setHovered(false)}}
                            onClick={handleLogOut}
                        >
                            Log out 
                        </animated.button>
                    </div>
                )
              : 
                (
                    <AnimatedLink style={animation}
                        onMouseOver={()=>{setHovered(true)}}
                        onMouseOut={()=>{setHovered(false)}}
                        to="/signup"
                    >
                        Sign up
                    </AnimatedLink>
                )
            }
            
            
            {/* <button >
                {username}
            </button> */}
            </div>
        </div>
    );
}

export default NavBar;
