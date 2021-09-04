import React, { useEffect } from 'react'
import { usePractice } from '../Pages/Practice'
import NewGameButton from './NewGameButton';
import RetryButton from './RetryButton';
import { useStart } from '../Pages/StartPage';

export default function Information({type,className}) {

    const {score,data} = type=="start"?useStart():usePractice();
    return data?(
        <div className={className}>
            <div className="top-right">
                <RetryButton type={type}/>
                <NewGameButton type={type}/>
            </div>
            <div className="score">
                <h3>{parseInt(score)}</h3>
                <p>wpm</p>
            </div>
            <div className="text">
                <div><span>Author:</span> {data.author}</div>
                <hr />
                <div className="date"><span>Date:</span> {data.dateAdded}</div>
            </div>
        </div>
    ):'';
}
