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
                    <NavLink to="/start" exact activeClassName="active"><MyLi>Start</MyLi> </NavLink>
                    <NavLink to="/practice" exact activeClassName="active"><MyLi>Practice</MyLi> </NavLink>
                    <NavLink to="/profile" exact activeClassName="active"><MyLi>Profile</MyLi> </NavLink>
                    <NavLink to="/settings" exact activeClassName="active"><MyLi>Settings</MyLi> </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;