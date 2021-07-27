import axios from 'axios';
import '../styles/practice-dali.scss'

import React,{createContext, useContext, useEffect, useState} from 'react'
import TextSpace from '../components/TextSpace'
import RaceInput from '../components/RaceInput';
import { useQuote } from '../customHooks';

import {getFirstWord, removeFirstWord, getFirstLetter, removeFirstLetter, getLastLetter, addLetter} from '../functions/StringFunctions'

//setting context
const PracticeContext = createContext();
export function usePractice(){
    return useContext(PracticeContext)
}

export default function Practice() {

    //the main parts
    const [writtenWords, setWrittenWords] = useState("")
    const [currentWord, setCurrentWord] = useState({
        lettersWritten: "",
        lettersNotWritten:"",
        fullWord: "",
    })
    const [wordsNext, setWordsNext] = useState("");

    //input handling
    useEffect(async()=>{
        const response = await axios.get("https://api.quotable.io/random?minLength=50");
        const data= response.data;
        setCurrentWord(prev=>{return{
           ...prev, lettersNotWritten: getFirstWord(data.content), fullWord:getFirstWord(data.content)
       }})
       setWordsNext(removeFirstWord(data.content))
    },[])


    const handleChange = (e)=>{
        const {value} = e.target; 
        // if(!getLastLetter(value)) return ;

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

        // if(!(getLastLetter(value)===getFirstLetter(currentWord.lettersNotWritten))) return ; 
        if(currentWord.fullWord.substr(0, value.length) === value){
            console.log(currentWord.fullWord.substr(0, value.length))
            setCurrentWord(prev=>{return{
                fullWord: prev.fullWord,
                lettersWritten:currentWord.fullWord.substr(0, value.length) ,
                lettersNotWritten:currentWord.fullWord.substr(value.length)
            }})
        }

        // setCurrentWord(prev=>{return{
        //     lettersWritten:addLetter(prev.lettersWritten,getLastLetter(value)),
        //     lettersNotWritten:removeFirstLetter(prev.lettersNotWritten)
        // }})
    }

    
    //values to share with child components
    const value = {
        wordsNext,
        writtenWords,
        currentWord,
        handleChange
    }

    return (
        <PracticeContext.Provider value={value}>
        <div className="practice-dali">
            <div className="contained">
            <TextSpace/>
            <RaceInput/>
            </div>
        </div>
        </PracticeContext.Provider>
    )
}

