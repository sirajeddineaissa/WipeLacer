import React, { useRef } from 'react'
import HomeButton from '../components/HomeButton'
import '../styles/join.scss'


export default function JoinPage() {

    const inputRef = useRef();

    const handleJoin = ()=>{
        
    }

    return (
        <div className="join">
            <HomeButton/>
            <div>
                <label htmlFor="code-input">Enter game code</label>
                <div className="input-place">
                    <input type="text" id="code-input" placeholder="enter code here"  ref={inputRef}/>
                    <div className="line"></div>
                </div>
                <button onClick={handleJoin}>Join Game</button>
            </div>
        </div>
    )
}
