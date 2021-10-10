import React, { useRef, useState } from "react";
import HomeButton from "../components/HomeButton";
import { rdb } from "../firebase";
import "../styles/join.scss";
import StartPage from "./StartPage";
import { get } from "firebase/database";

export default function JoinPage() {
  const [error, setError] = useState("");
  const [foundGame, setFoundGame] = useState(false);
  const [gameCode, setgameCode] = useState();
  const [data, setData] = useState();
  const inputRef = useRef();

  const handleJoin = () => {
    const { value } = inputRef.current;

    const GameRef = rdb.ref("Game").child(value);
    if (!GameRef) {
      // display error message
      setError("Game not found !");
      return;
    }

    const GameInfo = GameRef.get().then((snapshot) => {
      if (!snapshot.exists()) return;
      setData(snapshot.val().data);
      setgameCode(value);
    });

    GameRef.update({
      foundPlayer: true
    });
    setFoundGame(true);
  };

  return foundGame ? (
    <StartPage
      type="join"
      data={data}
      setData={setData}
      player={2}
      gameCode={gameCode}
    />
  ) : (
    <div className="join">
      <HomeButton />
      {
        <div>
          <label htmlFor="code-input">Enter game code</label>
          <div className="input-place">
            <input
              type="text"
              id="code-input"
              placeholder="enter code here"
              ref={inputRef}
            />
            <div className="line"></div>
          </div>
          <button onClick={handleJoin}>Join Game</button>
          <span className="error">{error}</span>
        </div>
      }
    </div>
  );
}
