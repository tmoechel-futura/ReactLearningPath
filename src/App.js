import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(1);
  const [inputValue, setInputValue] = useState("initial message");
  const [hideText, setHideText] = useState(false);
  const [textColor, setTextColor] = useState("green");

  const increaseAge = () => {
    setAge(age + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleHideButtonClick = () => {
    setHideText(!hideText);
    setTextColor(textColor === "green" ? "red": "green");
  };

  const handleIncreaseButtonClick = () => {
    setAge(age + 1);
  }

  const handleDecreaseButtonClick = () => {
    setAge(age -1);
  }

  const handleSetToZeroClick = () => {
    setAge(0);
  }

  return (
    <div className={styles.App}>
      <h2> {age}</h2>
      <h2 style={{ color: textColor }}> {inputValue}</h2>
      <button onClick={increaseAge}> Increase Age </button>
      {hideText && (
        <input onChange={handleInputChange} value={inputValue} type="text" />
      )}
      <p />
      <button onClick={handleHideButtonClick}> Toggle input </button>
      <p />
      <button onClick={handleIncreaseButtonClick}> Increase </button>
      <button onClick={handleDecreaseButtonClick}> Decrease </button>
      <button onClick={handleSetToZeroClick}> Set to 0 </button>
    </div>
  );
}

export default App;
