import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home-button.scss'

export default function HomeButton() {
    return (
        <Link className="home-button" to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z" /></svg>
        </Link>
    )
}
