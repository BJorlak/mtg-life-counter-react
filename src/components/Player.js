import React from "react";

function Player(props) {
  const {
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
    <div className="flex justify-center  w-full md:w-1/2 p-2">
      <div className={cardClassName}>
        <form className="m-12 flex justify-center items-center ">
          <input
            type="text"
            className="text-white placeholder-white bg-cyan-600 text-center  text-xl font-bold mb-4"
            placeholder="Enter player name"
          ></input>
        </form>
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
