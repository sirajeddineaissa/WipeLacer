import React from 'react'

export default function TransitionScreen({transitioning}) {
    return (
        <div className={`transition-screen ${transitioning?'transitioning':''}`}>
            <div className="part part1"></div>
            <div className="part part2"></div>
            <div className="part part3"></div>
        </div>
    )
}
