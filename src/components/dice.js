import React, { useState } from "react";

const Dice = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const [draws, setDraws] = useState(0);
  const [rounds, setRounds] = useState(0);

  const [playerDice, setPlayerDice] = useState(1);
  const [computerDice, setComputerDice] = useState(1);

  const randomNumber = (myMin, myMax) => {
    return Math.floor(
      Math.random() * (Math.ceil(myMax) - Math.floor(myMin) + 1) + myMin
    );
  };

  const handleSpin = () => {
    setPlayerDice(randomNumber(1, 6));
    setComputerDice(randomNumber(1, 6));

    let pDice = playerDice;
    let cDice = computerDice;

    if (pDice > cDice) {
      setPlayerScore(playerScore + 1);
    } else if (pDice === cDice) {
      setDraws(draws + 1);
    } else {
      setComputerScore(computerScore + 1);
    }

    setRounds(rounds + 1);
  };

  return (
    <div id="container">
      <div className="player-info-container">
        <div className="player-div">
          <h1 className="p-name">You</h1>
          <p className="game-stats">Score: {playerScore}</p>

          <img
            className="dice-image"
            src={`images/${playerDice}.jpg`}
            alt="dice"
            height="250"
            width="250"
          />
        </div>

        <div id="mid-div" className="player-div">
          <p className="game-stats">Draws: {draws}</p>
          <p className="game-stats">Rounds: {rounds}</p>
        </div>

        <div className="player-div">
          <h1 className="p-name">Computer</h1>
          <p className="game-stats">Score: {computerScore}</p>

          <img
            className="dice-image"
            src={`images/${computerDice}.jpg`}
            alt="dice"
            height="250"
            width="250"
          />
        </div>

        <button id="spin" onClick={() => handleSpin()}>
          Spin
        </button>
      </div>
    </div>
  );
};

export default Dice;
