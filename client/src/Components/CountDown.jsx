import React from 'react'
import { usePractice } from '../Pages/Practice'
import { useStart } from '../Pages/StartPage'


export default function CountDown({type}) {

    const {countdownNumber,started} = type=="start"?useStart():usePractice()

    return (
        <>
            {(!started)?(
                <div className="countdown"> {countdownNumber} </div>
            ):''}
        </>
    )
}
