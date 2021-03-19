import React, { useState } from "react";

const Dice = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);

  return (
    <div id="container">
      <div id="player-div"></div>

      <div id="computer-div"></div>
    </div>
  );
};

export default Dice;
