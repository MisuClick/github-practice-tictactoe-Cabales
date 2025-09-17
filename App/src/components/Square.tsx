interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  theme: string;
  highlight?: boolean;
}

export default function Square({ value, onSquareClick, theme, highlight }: SquareProps) {
  return (
    <button
      className={`square ${theme} ${highlight ? "highlight" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
