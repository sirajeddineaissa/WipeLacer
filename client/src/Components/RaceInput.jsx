import React from 'react'
import { usePractice } from '../Pages/Practice'

export default function RaceInput() {

    const {handleChange} = usePractice()

    return (
            <input type="text" placeholder="Write here..." onChange={handleChange}/>
    )
}
