import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ variant = "default" }: { variant?: "default" | "light" | "dark" }) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const textClass =
    variant === "dark"
      ? "text-secondary-foreground/70 hover:text-primary"
      : "text-foreground/70 hover:text-primary";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-lg transition-all duration-300 ${textClass}`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
