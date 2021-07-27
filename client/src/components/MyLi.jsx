import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { useHover } from '../customHooks'


const MyLi = ({ children }) => {

    const [animation, setHovered] = useHover({
        transformFrom: "rotateY(-20deg) translateZ(0px) scale(1)",
        transformTo: "rotateY(-10deg) translateZ(50px) scale(1.05)"
    })

    return (
        <animated.li
            style={animation}
            onMouseOver={() => { setHovered(true) }}
            onMouseOut={() => { setHovered(false) }}
        >
            <div className="line"></div>
            <a>{children}</a>
            <div className="line"></div>
        </animated.li>
    );
}

export default MyLi;
