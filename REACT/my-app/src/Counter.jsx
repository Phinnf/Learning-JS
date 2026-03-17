import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        border: "2px solid #4CAF50",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}>
      <h2>Player: {props.playerName}</h2>
      <p>Score: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", cursor: "pointer", marginRight: "5px" }}>
        +1 Point
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ padding: "10px 20px", cursor: "pointer" }}>Reset Point</button>
    </div>
  );
}

export default Counter;
