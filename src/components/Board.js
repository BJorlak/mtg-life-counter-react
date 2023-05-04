import React, { useState } from "react";
import Player from "./Player";

function Board() {
  const [player1LifeTotal, setPlayer1LifeTotal] = useState(20);
  const [player2LifeTotal, setPlayer2LifeTotal] = useState(20);

  const handlePlayer1Increment = () => {
    setPlayer1LifeTotal(player1LifeTotal + 1);
  };

  const handlePlayer1Decrement = () => {
    if (player1LifeTotal > 0) {
      setPlayer1LifeTotal(player1LifeTotal - 1);
    }
  };

  const handlePlayer2Increment = () => {
    setPlayer2LifeTotal(player2LifeTotal + 1);
  };

  const handlePlayer2Decrement = () => {
    if (player2LifeTotal > 0) {
      setPlayer2LifeTotal(player2LifeTotal - 1);
    }
  };

  let gameStatus = "Magic: The Gathering Life Counter";

  if (player2LifeTotal === 0 || player1LifeTotal === 0) {
    gameStatus = (
      <h1 className="text-red-700 mt-2 text-7xl font-bold text-center mb-4">
        GAME OVER
      </h1>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <Player
            id={1}
            lifeTotal={player1LifeTotal}
            handleIncrement={handlePlayer1Increment}
            handleDecrement={handlePlayer1Decrement}
            isFlipped={true}
          />
          <h1 className="text-green-500 mt-2 text-3xl font-bold text-center mb-2">
            {gameStatus}
          </h1>
          <Player
            id={2}
            lifeTotal={player2LifeTotal}
            handleIncrement={handlePlayer2Increment}
            handleDecrement={handlePlayer2Decrement}
            isFlipped={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
