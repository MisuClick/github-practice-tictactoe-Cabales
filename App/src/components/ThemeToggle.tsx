import React from "react";

interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-6 h-6 rounded-full border-2 transition ${
        theme === "light"
          ? "bg-white border-gray-400"
          : "bg-black border-gray-600"
      }`}
    />
  );
}
