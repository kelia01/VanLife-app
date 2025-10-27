import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export function ThemeProvider({children}:any) {
    const [theme, setTheme] = useState('light');

   useEffect(() => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}, [theme]);


    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}