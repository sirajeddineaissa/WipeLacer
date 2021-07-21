import React,{useState} from 'react';
import '../styles/settings.scss'

import HomeButton from '../Components/HomeButton'
import Parameter from '../Components/Parameter';

const SettingsPage = () => {

    const [settings, setSettings] = useState([
        {name:'Punctuation', on:false},
        {name:'Music', on: false},
    ])

    const switchSetting = (index)=>{
        setSettings(prev=>{
            const succ = prev.map((param, i)=>{
                if(i!==index) return param ; 
                return {...param, on: !param.on};
            })
            return succ;
        })
    }

    return (
        <div className="settings">
            <HomeButton/>
            <div className="contained">
                {settings.map(({name, on},index)=>(
                    <Parameter name={name} on={on} onSwitch ={()=>{
                        switchSetting(index)
                    }}/>
                ))}
            </div>
        </div>
    );
}

export default SettingsPage;
