import axios from 'axios';
import '../styles/practice-dali.scss'

import React,{createContext, useContext, useEffect, useState ,useRef} from 'react'
import TextSpace from '../components/TextSpace'
import RaceInput from '../components/RaceInput';
import { useCoundDown, useQuote,useWpm } from '../customHooks';

import {getFirstWord, removeFirstWord, getFirstLetter, removeFirstLetter, getLastLetter, addLetter} from '../functions/StringFunctions'
import CountDown from '../components/CountDown';

//setting context
const PracticeContext = createContext();
export function usePractice(){
    return useContext(PracticeContext)
}

// main component
export default function Practice() {

    //setting counter
    const {
        countdownNumber, 
        started,setStarted
    } = useCoundDown()

    //initializing the quote
    const {
        writtenWords, setWrittenWords,
        currentWord, setCurrentWord,
        wordsNext, setWordsNext
    } = useQuote();

    // initiliazing wpm counter
    const wpm = useWpm(started,setWrittenWords)

    //input dependencies
    const switchWord = ()=>{
        setWrittenWords(prev=>`${prev} ${currentWord.lettersWritten}`)
        setCurrentWord({
            lettersNotWritten:getFirstWord(wordsNext),
            lettersWritten : "",
            fullWord: getFirstWord(wordsNext)
        })
        setWordsNext(removeFirstWord(wordsNext));
    }
    const switchLetters = (value) => {
        setCurrentWord(prev=>{return{
            fullWord: prev.fullWord,
            lettersWritten:currentWord.fullWord.substr(0, value.length) ,
            lettersNotWritten:currentWord.fullWord.substr(value.length)
        }})
    }
    const switchLastWord = (value) => {
        setWrittenWords(prev=> prev+" "+value)
        setCurrentWord({
            fullWord:"",
            lettersNotWritten:"",
            lettersWritten:"",
        })
    }
    // handling input
    const handleChange = (e)=>{
        const {value} = e.target; 

        if(getLastLetter(value)===" "){
            if (currentWord.lettersNotWritten) return;
            switchWord();
            e.target.value= "";
            return;
        }

        if(currentWord.fullWord.substr(0, value.length) === value){
            switchLetters(value)
        
            if(wordsNext) return;
            if(currentWord.lettersNotWritten.length>1)return;
            
            switchLastWord(value);
            setStarted(false);
            console.log('last character written') // here we stop the race
        }
    }

    
    //values to share with child components
    const value = {
        wordsNext,
        writtenWords,
        currentWord,
        handleChange,
        started,
        countdownNumber
    }

    return (
        <PracticeContext.Provider value={value}>
        <div className="practice-dali">
            <div className="contained">
                <div className="wpm">{parseInt(wpm)} wpm</div>
                <CountDown/>
                <TextSpace/>
                <div className="input-container">
                    <RaceInput/>
                    <div className="blue line"></div>
                </div>
            </div>
        </div>
        </PracticeContext.Provider>
    )
}

