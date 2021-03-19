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

    let playerDice = randomNumber(1, 6);
    let computerDice = randomNumber(1, 6);

    if (playerDice > computerDice) {
      setPlayerScore(playerScore + 1);
    } else if (playerDice === computerDice) {
      setDraws(draws + 1);
    } else {
      setComputerScore(computerScore + 1);
    }

    setRounds(rounds + 1);
  };

  return (
    <div id="container">
      <div id="player-div">
        <h1 className="p-name">Player</h1>
        <p>Score: {playerScore}</p>

        <img src="images/1.jpg" alt="dice" height="150" width="150" />
      </div>

      <div>
        <p className="draws">Draws: {draws}</p>
        <p className="rounds">Rounds: {rounds}</p>
      </div>

      <div id="computer-div">
        <h1 className="p-name">Computer</h1>
        <p>Score: {computerScore}</p>

        <img src="images/1.jpg" alt="dice" height="150" width="150" />
      </div>

      <button id="spin" onClick={() => handleSpin()}>
        Spin
      </button>
    </div>
  );
};

export default Dice;
