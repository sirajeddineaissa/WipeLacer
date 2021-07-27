import axios from 'axios';
import '../styles/practice-dali.scss'

import React,{createContext, useContext, useEffect, useState} from 'react'
import TextSpace from '../components/TextSpace'
import RaceInput from '../components/RaceInput';
import { useCoundDown, useQuote } from '../customHooks';

import {getFirstWord, removeFirstWord, getFirstLetter, removeFirstLetter, getLastLetter, addLetter} from '../functions/StringFunctions'
import CountDown from '../components/CountDown';

//setting context
const PracticeContext = createContext();
export function usePractice(){
    return useContext(PracticeContext)
}

export default function Practice() {

    //setting counter
    const {
        countdownNumber, 
        started
    } = useCoundDown()

    //initializing the quote
    const {
        writtenWords, setWrittenWords,
        currentWord, setCurrentWord,
        wordsNext, setWordsNext
    } = useQuote();

    const handleChange = (e)=>{
        const {value} = e.target; 

        if(getLastLetter(value)===" "){
            
            if (currentWord.lettersNotWritten) return;
            
            setWrittenWords(prev=>`${prev} ${currentWord.lettersWritten}`)
            setCurrentWord({
                lettersNotWritten:getFirstWord(wordsNext),
                lettersWritten : "",
                fullWord: getFirstWord(wordsNext)
            })
            setWordsNext(removeFirstWord(wordsNext));

            e.target.value= "";
            return;
        }

        if(currentWord.fullWord.substr(0, value.length) === value){
            setCurrentWord(prev=>{return{
                fullWord: prev.fullWord,
                lettersWritten:currentWord.fullWord.substr(0, value.length) ,
                lettersNotWritten:currentWord.fullWord.substr(value.length)
            }})
        
            if(wordsNext) return;
            if(currentWord.lettersNotWritten.length>1)return;
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
                <CountDown/>
                <TextSpace/>
                <RaceInput/>
            </div>
        </div>
        </PracticeContext.Provider>
    )
}

