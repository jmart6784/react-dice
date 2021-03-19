import React, { useState } from "react";

const Dice = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);
  const [rounds, setRounds] = useState(0);

  return (
    <div id="container">
      <div id="player-div">
        <h1 className="p-name">Player</h1>

        <img src="images/1.jpg" alt="dice-1" height="150" width="150" />
      </div>

      <button id="spin">Spin</button>

      <div id="computer-div">
        <h1 className="p-name">Computer</h1>

        <img src="images/1.jpg" alt="dice-1" height="150" width="150" />
      </div>
    </div>
  );
};

export default Dice;
