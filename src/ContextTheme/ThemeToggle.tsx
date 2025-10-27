import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <button onClick={toggleTheme}
        className="px-4 py-2 rounded-md border focus:outline-none hover:opacity-90 transition"
        >
            {theme === 'dark' ? 'dark' : 'light'}
        </button>
    </div>
  )
}
