import axios from 'axios'
import {useState,useDebugValue,useEffect} from 'react'
import {useSpring} from 'react-spring'

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

  const [wordsNext, setWordsNext] = useState("")

  useEffect(async()=>{
     const response = await axios.get("https://api.quotable.io/random?minLength=50");
     const data= response.data;
     setWordsNext(data.content)
  },[])

  return [wordsNext,setWordsNext]
}


export {useHover,useQuote};