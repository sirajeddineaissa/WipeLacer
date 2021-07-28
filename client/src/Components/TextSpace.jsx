import React from 'react'
import { usePractice } from '../Pages/Practice'

export default function TextSpace() {

    const {wordsNext, writtenWords, currentWord} = usePractice()
    return (
        <div className="text-space">
            <span className="green"> {writtenWords} </span>
            <span className="current-word">
            <span className="green">{currentWord.lettersWritten}</span>
            <span >{currentWord.lettersNotWritten+" "}</span>
            </span>
            <span>{wordsNext}</span>
        </div>
    )
}
