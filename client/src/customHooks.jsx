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
    const [data, setData] = useState()
    const [writtenWords, setWrittenWords] = useState("")
    const [currentWord, setCurrentWord] = useState({
        lettersWritten: "",
        lettersNotWritten:"",
        lettersWrong: '',
        fullWord: "",
    })
    const [wordsNext, setWordsNext] = useState("");

    //input handling
    useEffect(async()=>{
        const response = await axios.get("https://api.quotable.io/random?minLength=150");
        const data= response.data;
        setCurrentWord(prev=>{return{
           ...prev, lettersNotWritten: getFirstWord(data.content), fullWord:getFirstWord(data.content)
       }})
       setWordsNext(removeFirstWord(data.content))
       setData(data);
    },[])

    return {
      writtenWords, setWrittenWords,
      currentWord, setCurrentWord,
      wordsNext, setWordsNext,
      data,setData
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
                
                setStarted(true)
                clearInterval(countDownInterval);
            }
           
       },1000) 
    },[])

    return {
      countdownNumber, started,
      setStarted, setCountdownNumber
    }
}

function useWpm(started, setWrittenWords,setCurrentWord){
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
            let nbrLetters ; 
            setWrittenWords(prev=>{nbrLetters= prev.length; return prev})

            //get the number of additional letters
            let addLetters;
            setCurrentWord(prev=>{addLetters= prev.lettersWritten.length;return prev})
            

            // setting wpm
            setWpm((((nbrLetters+addLetters)/5)*60)/nbrSeconds)
        },1000))
        

    },[started])
    return {wpm,setWpm};
}

function useRealCountdown(){
    const [countdownNumber, setCountdownNumber] = useState(10)
    const [started, setStarted] = useState(false)
    

    useEffect(()=>{

        //await for other player

        const countDownInterval = setInterval(()=>{
            setCountdownNumber(prev=>prev-1)  
            let realCount ;
            setCountdownNumber(prev=>{realCount=prev; return prev})
            if(realCount<=0) {
                
                setStarted(true)
                clearInterval(countDownInterval);
            }
           
       },1000) 
    },[])

    return {
      countdownNumber, started,
      setStarted, setCountdownNumber
    }
}

const useAnImportedQuote = (data,type)=>{
    const [writtenWords, setWrittenWords] = useState("");
    const [currentWord, setCurrentWord] = useState({
        lettersWritten: "",
        lettersNotWritten:"",
        lettersWrong: '',
        fullWord: "",
    })
    const [wordsNext, setWordsNext] = useState("");

    useEffect(()=>{

        if(!data) return ;

        setCurrentWord(prev=>{return{
            ...prev, lettersNotWritten: getFirstWord(data.content), fullWord:getFirstWord(data.content)
        }})
        setWordsNext(removeFirstWord(data.content))
        
    },[data])

    return {
        writtenWords, setWrittenWords,
        currentWord,setCurrentWord,
        wordsNext, setWordsNext,
    }

}

export {useHover,useQuote,useCoundDown, useWpm, useRealCountdown ,useAnImportedQuote};