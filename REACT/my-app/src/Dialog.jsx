import React from "react";

export default function Dialog(props) {
  return (
    <div
      style={{
        border: "3px solid ${props.color}",
        padding: "20px",
        borderRadius: "8px",
        margin: "20px",
      }}>
      <h1 style={{ color: props.color }}>{props.title}</h1>
      <div className="dialog-content">{props.children}</div>
    </div>
  );
}
