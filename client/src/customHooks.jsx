import axios from 'axios'
import {useState,useDebugValue,useEffect} from 'react'
import {useSpring} from 'react-spring'
import {getFirstWord, removeFirstWord} from './functions/StringFunctions'

function useHover({
    transformFrom='none',
    transformTo='none',
    backgroundTo='none',
    backgroundFrom='none',
    colorTo='none',
    colorFrom='none'
}){
    const [hovered,setHovered]= useState(false)
  
    const animation = useSpring({
      transform : hovered? transformTo:transformFrom,
      background: hovered? backgroundTo: backgroundFrom,
      color: hovered? colorTo:colorFrom
    })
  
    useDebugValue(hovered?? 'false')
    return [animation,setHovered];
}

function useQuote(){

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

    return {
      writtenWords, setWrittenWords,
      currentWord, setCurrentWord,
      wordsNext, setWordsNext
    }
}

function useCoundDown(){
    const [countdownNumber, setCountdownNumber] = useState(5)
    const [started, setStarted] = useState(false)

    useEffect(()=>{
       const countDownInterval = setInterval(()=>{
            setCountdownNumber(prev=>prev-1)  
            let realCount ;
            setCountdownNumber(prev=>{realCount=prev; return prev})
            if(realCount<=0) {
                console.log('stopped')
                setStarted(true)
                clearInterval(countDownInterval);
            }
           
       },1000) 
    },[])

    return {
      countdownNumber, started,
      setStarted
    }
}

function useWpm(started, setWrittenWords){
  const [wpm, setWpm] = useState(0);

    const [countingInterval, setCountingInterval] = useState(null);

    useEffect(()=>{
        if(!started) {
            if(countingInterval) {
                clearInterval(countingInterval);
                setCountingInterval(null);
            }   
            return 
        };
        let nbrSeconds = 0;
        setCountingInterval(setInterval(()=>{
            nbrSeconds++;

            //get number of words written
            let nbrWords ; 
            setWrittenWords(prev=>{nbrWords= prev.split(' ').length-1; console.log(prev) ; return prev})

            // setting wpm
            setWpm((nbrWords*60)/nbrSeconds)
        },1000))
        

    },[started])
    return wpm;
}

export {useHover,useQuote,useCoundDown, useWpm};