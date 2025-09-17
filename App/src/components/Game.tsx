import React, { useState } from "react";
import Board from "./Board";
import Navbar from "./Navbar";

export default function Game() {
  const [history, setHistory] = useState<Array<(string | null)[]>>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [theme, setTheme] = useState("light");

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);

    setHistory(prevHistory => prevHistory.slice(0, nextMove + 1));
  }

  const startButton = (
    <div className="start-game-container">
      <button
        className="history-button start-button"
        onClick={() => {
          if (currentMove === 0) {
            jumpTo(0); // just start
          } else {
            // restart game: clear history and reset move
            setHistory([Array(9).fill(null)]);
            setCurrentMove(0);
          }
        }}
      >
        {currentMove === 0 ? "Start Game" : "Restart Game"}
      </button>
    </div>
  );

 const moves = history.slice(1).map((_, index) => {
  const moveNumber = index + 1; // adjust for slice
  return (
    <li key={moveNumber} className="history-item flex justify-between items-center mb-1">
      <span>Move {moveNumber}</span>
      <button
        className="history-button"
        onClick={() => jumpTo(moveNumber)}
      >
        &#8594;
      </button>
    </li>
  );
});

  return (
  <div className={`game ${theme}`}>
    <Navbar
      theme={theme}
      onToggle={() => setTheme(theme === "light" ? "dark" : "light")}
    />

      <div className="game-container">
        <div className="game-board">   
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          theme={theme}
          />
           {startButton}
      </div>
      <div
        className={`game-info ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-black"
        }`}
        >
          <h3 className="history-title mb-2 font-bold text-center">History</h3>
        <ol>{moves}</ol>
      </div>
    </div>
  </div>
);
}
