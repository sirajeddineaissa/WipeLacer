import React,{useState, useEffect} from 'react';
import '../styles/settings.scss'

import HomeButton from '../components/HomeButton'
import Parameter from '../components/Parameter';
import {useSound } from '../contexts/SoundContext'

import {useHover} from '../customHooks'
import { animated } from 'react-spring';
import { useAuth } from '../contexts/AuthContext';

const SettingsPage = () => {


    const [disableButton, setDisableButton] = useState(true)
    const {findUserCollection, currentUser,setUserSettings} = useAuth();
    const {resetSoundStatus} = useSound();
    const [settings, setSettings] = useState([
        {name:'Punctuation', on:false},
        {name:'Music', on: false},
    ])

    useEffect(async() => {
        if(!currentUser) return ; 
        const foundSettings = await findUserCollection();
        console.log(foundSettings)
        setSettings(foundSettings.settings)
    }, [currentUser])
    

    const switchSetting = (index)=>{
        setDisableButton(false)
        setSettings(prev=>{
            const succ = prev.map((param, i)=>{
                if(i!==index) return param ; 
                return {...param, on: !param.on};
            })
            return succ;
        })
        
    }

    const handleApply =async ()=>{
        setDisableButton(true); 
        await setUserSettings(settings);
        resetSoundStatus();
    }

    const [animation, setHovered ] = useHover({
        backgroundFrom : 'transparent',
        backgroundTo:"white"
    })

    return (
        <div className="settings">
            <HomeButton/>
            <div className="contained">
                {settings.map(({name, on},index)=>(
                    <Parameter name={name} on={on} onSwitch ={()=>{
                        switchSetting(index);
                    }}/>
                ))}
                <animated.button className="apply"
                    style={animation}
                    onMouseOver={()=>{setHovered(true)}}
                    onMouseOut={()=>{setHovered(false)}}
                    disabled={disableButton}
                    onClick={handleApply}
                >apply</animated.button>
            </div>
        </div>
    );
}

export default SettingsPage;
