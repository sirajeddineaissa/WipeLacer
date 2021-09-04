import React,{useEffect, useState} from 'react'
import StartPage from './StartPage'
import uniqid from 'uniqid'
import { rdb } from '../firebase';
import RdbProvider from '../contexts/RealTimeContext';
import HomeButton from '../components/HomeButton';
import '../styles/before-start.scss'

export default function BeforeStart() {

    const [foundPlayer, setFoundPlayer] = useState(false);
    const [gameCode, setGameCode] = useState("");

    //creating new game
    useEffect(()=>{
        

        const gameRef= rdb.ref("Game");
        const game = {
            player1: 0,
            player2: 0,
            foundPlayer: false
        }
        setGameCode(gameRef.push(game).key);
    },[])

    useEffect(()=>{

        //await finding player

        // setTimeout(()=>{
        //     setFoundPlayer(true)
        // },2000)
    },[])


    const value = {

    }

    return (
        <RdbProvider value={value}>
            <div className="before-start">
                <HomeButton/>
            {
                foundPlayer?(
                    <StartPage/>
                ):(
                    <div>
                        <p>Send this code to your friend: </p>
                        <div className="input-place">
                            <input type="text" disabled value={gameCode}/> 
                            <button onClick={()=>{
                                navigator.clipboard.writeText(gameCode);
                            }}>copy</button>
                        </div>
                    </div>
                )
            }
            </div>
        </RdbProvider>
    )
}
