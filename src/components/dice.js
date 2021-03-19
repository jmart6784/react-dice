import React, { useState } from "react";

const Dice = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);
  const [rounds, setRounds] = useState(0);

  const randomNumber = (myMin, myMax) => {
    return Math.floor(
      Math.random() * (Math.ceil(myMax) - Math.floor(myMin) + 1) + myMin
    );
  };

  const handleSpin = () => {
    console.log(randomNumber(1, 6));
  };

  return (
    <div id="container">
      <div id="player-div">
        <h1 className="p-name">Player</h1>
        <p>Score: {playerScore}</p>

        <img src="images/1.jpg" alt="dice" height="150" width="150" />
      </div>

      <button id="spin" onClick={() => handleSpin()}>
        Spin
      </button>

      <div id="computer-div">
        <h1 className="p-name">Computer</h1>
        <p>Score: {computerScore}</p>

        <img src="images/1.jpg" alt="dice" height="150" width="150" />
      </div>
    </div>
  );
};

export default Dice;
