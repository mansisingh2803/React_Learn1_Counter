import React, { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  function increament() {
    setCount((prevCount) => {
      return (prevCount += 1);
    });
  }
  function decreament() {
    setCount((prevCount) => {
      return (prevCount -= 1);
    });
  }

  return (
    <>
      <div className="main"></div>
      <h2>{count}</h2>
      <button className="Inc" onClick={increament}>
        +
      </button>
      <button className="Dec" onClick={decreament}>
        -
      </button>
    </>
  );
}
export default App;
