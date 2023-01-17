import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ToggleModeBtn } from "./ToggleDarkMode.styles";

const ToggleDarkMode = ({ isDarkMode, setIsDarkMode }) => {
  console.log(isDarkMode);
  return (
    <div>
      <ToggleModeBtn onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </ToggleModeBtn>
    </div>
  );
};

export default ToggleDarkMode;
