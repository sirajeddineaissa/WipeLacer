import React,{useState,useEffect } from 'react';

const PracticePage = () => {
    const [countDown,setCountDown] = useState(3);
    useEffect(() => {
        countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
    }, [countDown]);

    return (
        <div class="practice">
            <h1 class ="countdown">{countDown}</h1>
            <textarea ></textarea>
        </div>
    );
}

export default PracticePage;
