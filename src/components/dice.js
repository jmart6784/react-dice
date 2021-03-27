import React, { useState, useEffect } from "react";

const Dice = () => {
  const [playerDice, setPlayerDice] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);

  const [computerDice, setComputerDice] = useState(1);
  const [computerScore, setComputerScore] = useState(0);

  const [draws, setDraws] = useState(-1);
  const [rounds, setRounds] = useState(-1);

  const randomNumber = (myMin, myMax) => {
    return Math.floor(
      Math.random() * (Math.ceil(myMax) - Math.floor(myMin) + 1) + myMin
    );
  };

  useEffect(() => {
    if (rounds !== 0) {
      if (playerDice > computerDice) {
        setPlayerScore((prev) => prev + 1);
      } else if (playerDice === computerDice) {
        setDraws((prev) => prev + 1);
      } else {
        setComputerScore((prev) => prev + 1);
      }
    }

    setRounds((prev) => prev + 1);
  }, [playerDice, computerDice]);

  const handleRoll = () => {
    setPlayerDice(randomNumber(1, 6));
    setComputerDice(randomNumber(1, 6));
  };

  const handleReset = () => {
    setRounds(-1);
    setDraws(-1);

    setPlayerDice(1);
    setPlayerScore(0);

    setComputerDice(1);
    setComputerScore(0);
  };

  return (
    <div id="container">
      <button id="reset" onClick={handleReset}>
        Reset
      </button>

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

        <button id="roll" onClick={handleRoll}>
          Roll
        </button>
      </div>
    </div>
  );
};

export default Dice;
