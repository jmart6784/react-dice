import React, { useState, useEffect, useCallback } from "react";

const Dice = () => {
  const [player, setPlayer] = useState({
    score: 0,
    dice: 1,
  });

  const [computer, setComputer] = useState({
    score: 0,
    dice: 1,
  });

  const [game, setGame] = useState({
    draws: 0,
    rounds: 0,
  });

  const randomNumber = (myMin, myMax) => {
    return Math.floor(
      Math.random() * (Math.ceil(myMax) - Math.floor(myMin) + 1) + myMin
    );
  };

  const handleRoll = () => {
    setPlayer({ ...player, dice: randomNumber(1, 6) });
    setComputer({ ...computer, dice: randomNumber(1, 6) });

    console.log(
      `Player: ${player.dice}, Computer: ${computer.dice}, ${player.dice} > ${
        computer.dice
      }: ${player.dice > computer.dice}`
    );

    if (player.dice > computer.dice) {
      setPlayer({ ...player, score: player.score + 1 });
    } else if (player.dice === computer.dice) {
      setGame({ ...game, draws: game.draws + 1 });
    } else {
      setComputer({ ...computer, score: computer.score + 1 });
    }

    setGame({ ...game, rounds: game.rounds + 1 });
  };

  const handleReset = () => {
    setPlayer({ score: 0, dice: 1 });
    setComputer({ score: 0, dice: 1 });
    setGame({ draws: 0, rounds: 0 });
  };

  return (
    <div id="container">
      <button id="reset" onClick={handleReset}>
        Reset
      </button>

      <div className="player-info-container">
        <div className="player-div">
          <h1 className="p-name">You</h1>
          <p className="game-stats">Score: {player.score}</p>

          <img
            className="dice-image"
            src={`images/${player.dice}.jpg`}
            alt="dice"
            height="250"
            width="250"
          />
        </div>

        <div id="mid-div" className="player-div">
          <p className="game-stats">Draws: {game.draws}</p>
          <p className="game-stats">Rounds: {game.rounds}</p>
        </div>

        <div className="player-div">
          <h1 className="p-name">Computer</h1>
          <p className="game-stats">Score: {computer.score}</p>

          <img
            className="dice-image"
            src={`images/${computer.dice}.jpg`}
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
