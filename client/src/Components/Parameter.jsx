import React,{useState} from 'react'
import '../styles/parameter.scss'

function Activation({on,onSwitch}){

    return (
        <div className={`activation ${on?'on':''}`} onClick={onSwitch} >
            

            <div className="background green"></div>
            <div className="background grey"></div>
            <div className="circle"></div>

        </div>
    )
}

export default function Parameter({name, on, onSwitch}) {

    return (
        <>
        <div className="parameter" >
            <p>{name}</p>
            <Activation on={on} onSwitch={onSwitch}/>
        </div>
        <hr />
        </>
    )
}
