import React, { useEffect, useRef } from 'react'
import { usePractice } from '../Pages/Practice'
import { useStart } from '../Pages/StartPage'

export default function RaceInput({type}) {

    const {handleChange, started} = type=="start"?useStart():usePractice()

    const inputRef = useRef()

    useEffect(()=>{
        if(started) inputRef.current.focus();
    },[started])

    return (
            <input type="text" placeholder="Write here..." onChange={handleChange} autoFocus={false} disabled={!started}  ref={inputRef}/>
    )
}
