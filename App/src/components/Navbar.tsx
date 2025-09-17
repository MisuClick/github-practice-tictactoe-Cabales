import React from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: string;
  onToggle: () => void;
}

export default function Navbar({ theme, onToggle }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1 className="logo">Tic-Tac-Toe</h1>
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </nav>
  );
}
