import React from "react";
import { usePractice } from "../Pages/Practice";
import { useStart } from "../Pages/StartPage";

export default function NewGameButton({ type }) {
  const { startGame, startWithDiffQuote } =
    type == "start" ? useStart() : usePractice();
  return (
    <div
      className="home-button"
      onClick={() => {
        startWithDiffQuote();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
        </g>
      </svg>
    </div>
  );
}
