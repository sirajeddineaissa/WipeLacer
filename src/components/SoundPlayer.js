import React from "react";
import Sound from "react-sound";
import keyboardSound from "../sounds/keyboard.mp3";
import { useSound } from "../contexts/SoundContext";

export default function SoundPlayer() {
  const { soundStatus } = useSound();

  return (
    <div>
      <Sound
        url={keyboardSound}
        playStatus={soundStatus ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={0}
        loop
      />
    </div>
  );
}
