import axios from 'axios';
import '../styles/practice-dali.scss'
import HomeButton from '../components/HomeButton'

import React,{createContext, useContext, useEffect, useState ,useRef} from 'react'
import TextSpace from '../components/TextSpace'
import RaceInput from '../components/RaceInput';
import Information from '../components/Information';
import { useCoundDown, useQuote,useWpm } from '../customHooks';

import {getFirstWord, removeFirstWord, getFirstLetter, removeFirstSpaces, getLastLetter, addLetter} from '../functions/StringFunctions'
import CountDown from '../components/CountDown';

//setting context
const StartContext = createContext();
export function useStart(){
    return useContext(StartContext)
}

// main component
export default function StartPage() {

    const [score, setScore] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);

    //setting counter
    const {
        countdownNumber, setCountdownNumber,
        started,setStarted
    } = useCoundDown()

    //initializing the quote
    const {
        writtenWords, setWrittenWords,
        currentWord, setCurrentWord,
        wordsNext, setWordsNext,
        data, setData
    } = useQuote();

    // initiliazing wpm counter
    const {wpm,setWpm} = useWpm(started,setWrittenWords,setCurrentWord)

    //input dependencies
    const switchWord = ()=>{
        setWrittenWords(prev=>`${prev} ${currentWord.lettersWritten}`)
        setCurrentWord({
            lettersNotWritten:getFirstWord(wordsNext),
            lettersWritten : "",
            lettersWrong:'',
            fullWord: getFirstWord(wordsNext)
        })
        setWordsNext(removeFirstWord(wordsNext));
    }
    const switchLetters = (value) => {
        setCurrentWord(prev=>{return{
            fullWord: prev.fullWord,
            lettersWritten:currentWord.fullWord.substr(0, value.length) ,
            lettersNotWritten:currentWord.fullWord.substr(value.length),
            lettersWrong: ''
        }})
    }
    const switchLastWord = (value) => {
        setWrittenWords(prev=> prev+" "+value)
        setCurrentWord({
            fullWord:"",
            lettersNotWritten:"",
            lettersWritten:"",
            lettersWrong:'',
        })
    }

    const resetGame = ()=>{
        setStarted(false);
        setCountdownNumber(5);
        
        
        setScore(wpm);
        setWordsNext(removeFirstWord(removeFirstSpaces(writtenWords))+" "+ currentWord.fullWord);
        setCurrentWord(prev=>{return {
            ...prev, 
            fullWord : getFirstWord(removeFirstSpaces(writtenWords)),
            lettersNotWritten : getFirstWord(removeFirstSpaces(writtenWords))
        }})
        setWrittenWords('');
    }

    const startGame = ()=>{
        
        setGameFinished(false)


        const countDownInterval = setInterval(()=>{
            setCountdownNumber(prev=>prev-1)  
            let realCount ;
            setCountdownNumber(prev=>{realCount=prev; return prev})
            if(realCount<=0) {
                console.log('stopped')
                
                setStarted(true)
                setGameFinished(false);
                clearInterval(countDownInterval);
                
            }
           
       },1000) 
    }

    const startWithDiffQuote = async()=>{
        const response = await axios.get("https://api.quotable.io/random?minLength=50");
        const data= response.data;
        setCurrentWord(prev=>{return{
           ...prev, lettersNotWritten: getFirstWord(data.content), fullWord:getFirstWord(data.content)
       }})
       setWordsNext(removeFirstWord(data.content))
       setData(data);
       startGame();
    }

    // handling input
    const handleChange = (e)=>{
        const {value} = e.target; 

        if(getLastLetter(value)===" "){
            if (currentWord.lettersNotWritten || currentWord.lettersWrong) return;
            switchWord();
            e.target.value= "";
            return;
        }

        if(currentWord.fullWord.substr(0, value.length) === value){
            switchLetters(value)
        
            if(wordsNext) return;
            
            if(currentWord.lettersNotWritten.length>1)return;
            

            switchLastWord(value);

            resetGame();
            e.target.value ="";
            setGameFinished(true)
            
            

            return ;
        }

        // in case the value does not match : looking for error
        for(let i =0 ; i<Math.min(value.length, currentWord.fullWord.length); i++) {
            if(value[i] !== currentWord.fullWord[i]){
                if(value.length>= currentWord.fullWord.length){
                    setCurrentWord(prev=>{return{
                        fullWord: prev.fullWord,
                        lettersNotWritten:'',
                        lettersWritten:prev.fullWord.substr(0, i),
                        lettersWrong: prev.fullWord.substr(i)
                    }})
                    return ;
                }
                setCurrentWord(prev=>{return {
                    fullWord: prev.fullWord,
                    lettersWritten: prev.fullWord.substr(0, i ),
                    lettersWrong: prev.fullWord.substr(i, value.length-i),
                    lettersNotWritten: prev.fullWord.substr(value.length)
                }})
                return ;
            }
        }
        
    }

    
    //values to share with child components
    const value = {
        wordsNext,
        writtenWords,
        currentWord,
        handleChange,
        started,
        countdownNumber,
        score,
        data,
        startGame,
        startWithDiffQuote
    }

    return (
        <StartContext.Provider value={value}>
        <div className="practice-dali">
            <HomeButton />
            <div className="contained">
                <div className="wpm">{parseInt(wpm)} wpm</div>
                <CountDown type="start"/>
                <TextSpace type="start"/>
                <div className="input-container">
                    <RaceInput type="start"/>
                    <div className="blue line"></div>
                </div>
                <Information type="start" className={`information ${gameFinished? 'shown': ''}`}/>
            </div>
        </div>
        </StartContext.Provider>
    )
}