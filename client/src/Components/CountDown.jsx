import React from 'react'
import { usePractice } from '../Pages/Practice'


export default function CountDown() {

    const {countdownNumber,started} = usePractice()

    return (
        <>
            {(!started)?(
                <div className="countdown"> {countdownNumber} </div>
            ):''}
        </>
    )
}
