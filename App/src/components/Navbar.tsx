import React from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: string;
  onToggle: () => void;
}

export default function Navbar({ theme, onToggle }: NavbarProps) {
  return (
    <nav className="navbar flex justify-between items-center p-4 shadow-md">
      <h1 className="logo text-xl font-bold">Tic-Tac-Toe</h1>
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </nav>
  );
}
