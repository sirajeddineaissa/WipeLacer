import React from 'react';
import RaceTemplate from '../Components/RaceTemplate';

const StartPage = () => {
    return (
        <div>
            <RaceTemplate countStart={10} minLength={200}/>
        </div>
    );
};

export default StartPage;