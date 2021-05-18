import React from 'react';
import NavBar from '../Components/NavBar'
import KeyboardSvg from '../Components/KeyboardSvg'
import MyLi from '../Components/MyLi'
import {NavLink} from 'react-router-dom'


function HomePage(){
    return (
        <div>
            <NavBar />
            <div className="main">
                <KeyboardSvg/>
                <ul>
                    <MyLi><NavLink to="/start" exact activeClassName="active">Start</NavLink></MyLi> 
                    <MyLi><NavLink to="/practice" exact activeClassName="active">Practice</NavLink></MyLi> 
                    <MyLi><NavLink to="/profile" exact activeClassName="active">Profile</NavLink></MyLi> 
                    <MyLi><NavLink to="/settings" exact activeClassName="active">Settings</NavLink></MyLi> 
                </ul>
            </div>
        </div>
    )
}

export default HomePage;