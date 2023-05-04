import { useState } from "react";
import React from "react";

function Player(props) {
  const [backgroundColor, setBackgroundColor] = useState("#0891b2");

  function handleBackgroundColorChange(newColor) {
    setBackgroundColor(newColor);
  }

  const {
    lifeTotal,
    handleIncrement,
    handleDecrement,
    isFlipped,
    background,
  } = props;
  const cardClassName = `bg-cyan-600 w-64 h-54 rounded-lg shadow-lg text-center p-2 ${
    isFlipped ? "transform rotate-180" : ""
  } bg-${background}-500`;

  return (
    <div className="flex justify-center  w-full md:w-1/2 p-2">
      <div className={cardClassName} style={{ backgroundColor }}>
        <form
          style={{ backgroundColor }}
          className="m-6 flex justify-center items-center "
        >
          <input
            style={{ backgroundColor }}
            type="text"
            className="w-52 text-white placeholder-white bg-cyan-600 text-center  text-xl font-bold mb-2"
            placeholder="Enter player name"
          ></input>
        </form>
        <p className="text-white	 text-6xl font-bold mb-4">
          {lifeTotal}
        </p>
        <div className="flex justify-around">
          <button
            className="text-white	text-7xl		"
            onClick={handleDecrement}
          >
            -
          </button>
          <button
            className="text-white	text-7xl	"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <input
            className="border-2 border-white border-solid"
            type="color"
            value={backgroundColor}
            onChange={(e) =>
              handleBackgroundColorChange(e.target.value)
            }
          />
          <button
            className="m-2 p-2 rounded-md  text-white "
            onClick={() => handleBackgroundColorChange("#0891b2")}
          >
            Reset background
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
