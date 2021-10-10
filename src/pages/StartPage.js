import React from "react";
import RaceTemplate from "../components/RaceTemplate";

const StartPage = () => {
  return (
    <div>
      <RaceTemplate countStart={10} minLength={200} />
    </div>
  );
};

export default StartPage;
