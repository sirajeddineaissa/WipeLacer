import React, { useEffect } from 'react'
import { usePractice } from '../Pages/Practice'
import NewGameButton from './NewGameButton';
import RetryButton from './RetryButton';

export default function Information(props) {

    const {score,data} = usePractice();
    return data?(
        <div {...props}>
            <div className="top-right">
                <RetryButton/>
                <NewGameButton/>
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
