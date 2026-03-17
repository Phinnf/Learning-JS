import React from "react";

function WrapperCard(props) {
  // Nhận mọi thứ được truyền vào giữa cặp thẻ <WrapperCard>...</WrapperCard>
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "20px",
        margin: "15px",
        width: "250px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}>
      {props.children}
    </div>
  );
}

export default WrapperCard;
