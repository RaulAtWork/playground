import React, { useContext } from "react";
import "./index.css";
import Theme, { ThemeContext } from "./Theme";

function App() {
  return (
    <Theme>
      <main>
        <h1>This theme switch!</h1>
        <ToggleButton />
      </main>
    </Theme>
  );
}

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>{theme}</button>;
}
export default App;
