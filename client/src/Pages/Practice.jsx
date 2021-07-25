import axios from 'axios';
import '../styles/practice-dali.scss'
import React,{createContext, useContext, useEffect, useState} from 'react'
import TextSpace from '../components/TextSpace'
import RaceInput from '../components/RaceInput';
import { useQuote } from '../customHooks';

const PracticeContext = createContext();

export function usePractice(){
    return useContext(PracticeContext)
}


export default function Practice() {

    const [writtenWords, setWrittenWords] = useState("hello this is dali")
    const [currentWord, setCurrentWord] = useState({
        lettersWritten: "sah",
        lettersNotWritten:"noun"
    })
    const [wordsNext, setWordsNext] = useQuote();

    const value = {
        wordsNext,
        writtenWords,
        currentWord
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
