import React from "react";

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  theme: string;
}

export default function Square({ value, onSquareClick, theme }: SquareProps) {
  return (
    <button
      onClick={onSquareClick}
      className={`square ${theme}`}
    >
      {value}
    </button>
  );
}
