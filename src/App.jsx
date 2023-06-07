import "./App.css";
import * as math from "mathjs";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleButtonClick(value) {
    console.log(value);

    if (value === "=") {
      try {
        const evalResult = math.evaluate(input);
        setResult(evalResult);
        setInput(evalResult);
        setInput("");
      } catch (error) {
        setInput("Error");
        setResult("");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  }

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("1")}> 1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={() => handleButtonClick("=")}>=</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
          </div>
          <div className="clear-row clear-btn">
            <button onClick={() => handleButtonClick("C")}>C</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
