import React from 'react';
import NavBar from '../Components/NavBar'
import KeyboardSvg from '../Components/KeyboardSvg'
import MyLi from '../Components/MyLi'
import '../styles/HomePage.scss'


function HomePage(){
    return (
        <div>
            <NavBar />
            <div className="main">
                <KeyboardSvg/>
                <ul>
                    <MyLi>Start</MyLi>
                    <MyLi>Practice</MyLi>
                    <MyLi>Profile</MyLi>
                    <MyLi>Settings</MyLi>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;