import React from "react";
import { usePractice } from "../Pages/Practice";
import { useStart } from "../Pages/StartPage";

export default function TextSpace({ type }) {
  const { wordsNext, writtenWords, currentWord } =
    type == "start" ? useStart() : usePractice();
  return (
    <div className="text-space">
      <span className="green"> {writtenWords} </span>
      <span className="current-word">
        <span className="green">{currentWord.lettersWritten}</span>
        <span className="red">{currentWord.lettersWrong}</span>
        <span>{currentWord.lettersNotWritten}</span>
        <span> </span>
      </span>
      <span>{wordsNext}</span>
    </div>
  );
}
