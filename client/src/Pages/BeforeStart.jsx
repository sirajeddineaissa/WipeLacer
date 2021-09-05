import React,{useEffect, useState} from 'react'
import StartPage from './StartPage'
import uniqid from 'uniqid'
import { rdb } from '../firebase';
import RdbProvider from '../contexts/RealTimeContext';
import HomeButton from '../components/HomeButton';
import '../styles/before-start.scss'
import { useQuote } from '../customHooks';

export default function BeforeStart() {

    const [foundPlayer, setFoundPlayer] = useState(false);
    const [gameCode, setGameCode] = useState("");
    const {data} = useQuote ();

    //creating new game
    useEffect(()=>{
        if(!data) return ;

        const gameRef= rdb.ref("Game");
        
        const game = {
            
            player1: 0,
            player2: 0,
            foundPlayer: false,
            data: data , 

        }
        setGameCode(gameRef.push(game).key);
    },[data])

    useEffect(()=>{
        if(!gameCode) return ;

        const gameRef = rdb.ref("Game");
        gameRef.on("value", snapshot=>{
            const games = snapshot.val();
            
            for(let id in games){
                console.log( gameCode,id)
                console.log(gameCode==id)
                if(id != gameCode) continue ; 
                
                setFoundPlayer(games[id].foundPlayer);
            }
        })
    },[gameCode])


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
