import React from "react";
import Square from "./Square";
import { calculateWinner } from "./utils/calculateWinner";

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
  theme: string;
}

export default function Board({ xIsNext, squares, onPlay, theme }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O"; 
    onPlay(nextSquares);
  }

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];

  console.log("Winning line:", winningLine);


  const status = winner
    ? `Congratulations! ${winner} is the winner!`
    : `Next turn: ${xIsNext ? "X" : "O"}`;
  
  return (
    <div
      className={`board-container ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } p-4 rounded-lg shadow-md`}
    >
      <div className="status mb-4 text-lg font-bold">{status}</div>
      <div className="board-row flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} theme={theme} highlight={winningLine.includes(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} theme={theme} highlight={winningLine.includes(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} theme={theme} highlight={winningLine.includes(2)} />
      </div>
      <div className="board-row flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} theme={theme} highlight={winningLine.includes(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} theme={theme} highlight={winningLine.includes(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} theme={theme} highlight={winningLine.includes(5)} />
      </div>
      <div className="board-row flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} theme={theme} highlight={winningLine.includes(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} theme={theme} highlight={winningLine.includes(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} theme={theme} highlight={winningLine.includes(8)} />
      </div>
    </div>
  );
}
