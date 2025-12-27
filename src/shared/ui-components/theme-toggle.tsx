import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
     
      onClick={toggleTheme}
      className="p-2 b dark:bg-[#f0f0f0] border border-[#f0f0f0]"
    >
      <Moon className="h-4 w-4 dark:hidden" />
      <Sun className=" h-4 w-4 hidden dark:block" />
    </button>
  );
}
