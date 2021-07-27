import React, { useEffect, useRef } from 'react'
import { usePractice } from '../Pages/Practice'

export default function RaceInput() {

    const {handleChange, started} = usePractice()

    const inputRef = useRef()

    useEffect(()=>{
        if(started) inputRef.current.focus();
    },[started])

    return (
            <input type="text" placeholder="Write here..." onChange={handleChange} autoFocus={false} disabled={!started}  ref={inputRef}/>
    )
}
