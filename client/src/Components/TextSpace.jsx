import React from 'react'
import { usePractice } from '../Pages/Practice'

export default function TextSpace() {

    const {wordsNext, writtenWords, currentWord} = usePractice()
    return (
        <div className="text-space">
            <span className="space-after"> {writtenWords} </span>
            <span>{currentWord.lettersWritten}</span>
            <span className="space-after">{currentWord.lettersNotWritten}</span>
            <span>{wordsNext}</span>
        </div>
    )
}
