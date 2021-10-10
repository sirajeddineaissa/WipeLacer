import React, { useEffect, useState } from 'react'
import StartPage from './StartPage'
import { rdb } from '../firebase';
import RdbProvider from '../contexts/RealTimeContext';
import HomeButton from '../components/HomeButton';
import '../styles/before-start.scss'
import { useQuote } from '../customHooks';

export default function BeforeStart() {

    const [foundPlayer, setFoundPlayer] = useState(false);
    const [gameCode, setGameCode] = useState("");
    const { data, setData } = useQuote();

    //creating new game
    useEffect(() => {
        if (!data) return;

        const gameRef = rdb.ref("Game");

        const game = {
            player1: 0,
            player2: 0,
            foundPlayer: false,
            gameFinished: false,
            data: data,
        }

        console.log(data);
        setGameCode(gameRef.push(game).key);
    }, [data])

    //finding player listener
    useEffect(() => {
        if (!gameCode) return;

        const gameRef = rdb.ref("Game");
        gameRef.on("value", snapshot => {
            const games = snapshot.val();

            for (let id in games) {
                if (id != gameCode) continue;
                setFoundPlayer(games[id].foundPlayer);
                return;
            }
        })
    }, [gameCode])

    const [ennemyWpm, setEnnemyWpm] = useState(0);




    const value = {

    }

    return (
        <RdbProvider value={value}>
            {
                foundPlayer ? <StartPage data={data} setData={setData} player={1} gameCode={gameCode} /> :
                    (
                        <div className="before-start">
                            <HomeButton />
                            <div>
                                <p>Send this code to your friend: </p>
                                <div className="input-place">
                                    <input type="text" disabled value={gameCode} />
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(gameCode);
                                    }}>copy</button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </RdbProvider>
    )
}
