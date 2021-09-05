import React, { useRef,useState } from 'react'
import HomeButton from '../components/HomeButton'
import { rdb } from '../firebase';
import '../styles/join.scss'
import StartPage from './StartPage';


export default function JoinPage() {

    const [error, setError] = useState("");
    const [foundGame, setFoundGame] = useState(false)
    const inputRef = useRef();

    const handleJoin = ()=>{
        const {value} = inputRef.current;

        const GameRef= rdb.ref('Game').child(value) ; 
        if(!GameRef){
            // display error message
            setError("Game not found !")
            return ;
        }
        GameRef.update({
            foundPlayer: true
        })
        setFoundGame(true);
    }

    return (
        <div className="join">
            <HomeButton/>
            {
                foundGame? (
                    <StartPage/>
                ):
                <div>
                    <label htmlFor="code-input">Enter game code</label>
                    <div className="input-place">
                        <input type="text" id="code-input" placeholder="enter code here"  ref={inputRef}/>
                        <div className="line"></div>
                    </div>
                    <button onClick={handleJoin}>Join Game</button>
                    <span className="error">{error}</span>
                </div>
            }
            
        </div>
    )
}
