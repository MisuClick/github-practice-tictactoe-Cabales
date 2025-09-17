interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`theme-toggle ${theme === "dark" ? "dark" : "light"}`}
    />
  );
}
