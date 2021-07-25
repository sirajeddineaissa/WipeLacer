import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
const PracticePage = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [countDown, setCountDown] = useState(5);
    const [leftPadding, setLeftPadding] = useState(new Array(20).fill(' ').join(''));
    const [outgoingChars, setOutgoingChars] = useState("");
    const [incomingChars, setIncomingChars] = useState("");
    const [currentChar, setCurrentChar] = useState("");
    const [start, setStart] = useState();
    const [wordCount, setWordCount] = useState(0);
    const [WPM, setWPM] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [insertedChars, setinsertedChars] = useState('');
    // const inputRef = useRef(null);
    useEffect(() => {
        countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
        // if (!countDown) inputRef.current.focus();
    }, [countDown]);

    const quoteAPI = async () => {
        let quotesArray = [];
        try {
            const data = await axios.get("https://api.quotable.io/random?minLength=100");
            quotesArray = data.data;
        }
        catch (err) {
            console.log(err)
        }
        try {
            setQuote(quotesArray.content);
            setIncomingChars(quotesArray.content.substr(1));
            setCurrentChar(quotesArray.content.charAt(0));
            setAuthor(quotesArray.author);
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        quoteAPI();
    }, [])
    // const input = () => {
    //     if (!countDown) return (<input ref={inputRef}></input>)
    //     return (<input ref={inputRef} disabled></input>)
    // }
    const keyPress = callback => {
        //everytime a key is pressed, we call the setKeyPressed to update the state
        const [keyPressed, setKeyPressed] = useState();

        useEffect(() => {
            //when a key is down we update the state only when it's a character key and more importantly register each key once when it's being held
            const downPressHandler = ({ key }) => {
                if (keyPressed !== key && key.length === 1 && !countDown) {
                    setKeyPressed(key);
                    callback && callback(key);
                }
            };
            // clear state on key release
            const upPressHandler = () => {
                setKeyPressed(null);
            };

            window.addEventListener('keydown', downPressHandler);
            window.addEventListener('keyup', upPressHandler);

            return () => {
                window.removeEventListener('keydown', downPressHandler);
                window.removeEventListener('keyup', upPressHandler);
            };
        });
    }
    const currentTime = () => new Date().getTime();
    keyPress(key => {
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        const updatedinsertedChars = insertedChars + key;
        if (!start) {setStart(currentTime);} //start calculating WPM when user starts typing
        setinsertedChars(updatedinsertedChars);
        if (key === currentChar) {
            if (leftPadding.length > 0) {
                setLeftPadding(leftPadding.substring(1));
            }
            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);
            setCurrentChar(incomingChars.charAt(0));
            updatedIncomingChars = incomingChars.substring(1);
            setIncomingChars(updatedIncomingChars);
            if (incomingChars.charAt(0) === ' ') {
                setWordCount(wordCount + 1);
                const duration = (currentTime() - start) / 60000; // duration in minutes
                setWPM(Math.round(((wordCount + 1) / duration))); // WPM = Total number of words / duration
            }
            // Accuracy = correct inserted chars / all inserted chars
            setAccuracy((Math.round((updatedOutgoingChars.length * 100) / updatedinsertedChars.length)));
        }
    });
    // console.log(outgoingChars);
    // console.log(WPM);
    return (
        <div className="practice">
            <h1 className={`${countDown ? "countdown" : "removeCountDown"}`}>Practice starts in {countDown}</h1>
            {/* <textarea placeholder={quote} disabled></textarea>
            {input()} */}
            <p className="Character">
                <span className="Character-out">
                    {(leftPadding + outgoingChars).slice(-20)}
                </span>
                <span className="Character-current">{currentChar}</span>
                <span>{incomingChars.substr(0, 50)}</span>
            </p>
            <h1>WPM : { WPM}    |    Accuracy : {accuracy}</h1>
        </div>
    );
}

export default PracticePage;
