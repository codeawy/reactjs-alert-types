import { useState } from "react";
import ToggleDarkMode from "./components/ToggleDarkMode";
import { GlobalStyle } from "./theme/global.styles";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="container">
      <GlobalStyle isDarkMode={isDarkMode} />
      <h1>Welcome here!</h1>
      <ToggleDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default App;
