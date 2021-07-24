import React,{useState,useEffect } from 'react';
import axios from "axios";

const PracticePage = () => {
    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");
    const [countDown,setCountDown] = useState(3);
   
    useEffect(() => {
        countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
    }, [countDown]);

    const quoteAPI = async() => {
        let quotesArray = [];
        try{
            const data = await axios.get("https://api.quotable.io/random?minLength=200");
            quotesArray = data.data;
        }
        catch(err){
            console.log(err)
        }
        try{
            setQuote(quotesArray.content);
            setAuthor(quotesArray.author);
        }
        catch(e){
            console.log(e)
        }
    }
     useEffect(()=> {
        quoteAPI();
    },[])
    return (
        <div className="practice">
            <h1 className={`${countDown ? "countdown" : "removeCountDown"}`}>Practice starts in {countDown}</h1> 
            <textarea placeholder={quote} disabled></textarea>
        </div>
    );
}

export default PracticePage;
