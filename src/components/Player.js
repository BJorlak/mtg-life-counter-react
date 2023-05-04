import React from "react";

function Player(props) {
  const {
    name,
    lifeTotal,
    handleIncrement,
    handleDecrement,
    isFlipped,
    background,
  } = props;
  const cardClassName = `bg-cyan-600 w-64 h-96 rounded-lg shadow-lg text-center p-4 ${
    isFlipped ? "transform rotate-180" : ""
  } bg-${background}-500`;

  return (
    <div className="flex justify-center pt-2 mt-12 w-full md:w-1/2 p-2">
      <div className={cardClassName}>
        <h2 className="text-white	 text-xl font-bold mb-4">{name}</h2>
        <p className="text-white	 text-6xl font-bold mb-8">
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
      </div>
    </div>
  );
}

export default Player;
