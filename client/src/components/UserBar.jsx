import React from 'react'
import { animated } from 'react-spring'
import { useHover } from '../customHooks'
import '../styles/user-bar.scss'

export default function UserBar({ user, handleLogOut }) {

    const [animation, setHovered] = useHover({
        backgroundFrom: '#282C34', backgroundTo: 'white'
    })
    return (
        <div>
            <div className="user-bar">
                <h2 className="email">
                    {user.email}
                </h2>
                <ul className="actions">
                    <animated.button style={animation}
                        onMouseOver={() => { setHovered(true) }}
                        onMouseOut={() => { setHovered(false) }}
                        onClick={handleLogOut}
                    >
                        Log out
                    </animated.button>
                </ul>
            </div>
        </div>
    )
}
