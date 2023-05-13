import React, { useEffect, useState } from "react";

const THEMECSSCLASS = {
  dark: "theme-dark",
  light: "theme-light",
};

export const ThemeContext = React.createContext({
  theme: THEMECSSCLASS.dark,
  toggleTheme: () => {},
});

function Theme({ children }) {
  const initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMECSSCLASS.dark
    : THEMECSSCLASS.light;
  const [theme, setTheme] = useState(initialTheme);

  function toggleTheme() {
    setTheme(
      theme === THEMECSSCLASS.dark ? THEMECSSCLASS.light : THEMECSSCLASS.dark
    );
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(mediaQuery.matches ? THEMECSSCLASS.dark : THEMECSSCLASS.light);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default Theme;
