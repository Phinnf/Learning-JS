import React, { useState } from "react";
import WrapperCard from "./WrapperCard";

function User(props) {
  // Khởi tạo State để quản lý trạng thái VIP (mặc định là false)
  const [isVip, setIsVip] = useState(false);

  return (
    <WrapperCard>
      <h3>Name: {props.username}</h3>
      <p style={{ color: isVip ? "gold" : "gray", fontWeight: "bold" }}>
        Status: {isVip ? "Premium Member" : "Free User"}
      </p>
      {/* Conditional Rendering (Toán tử &&): Chỉ hiện huy hiệu nếu là VIP */}
      {isVip && <p>👑 VIP Badge Unlocked!</p>}

      <hr style={{ margin: "15px 0" }} />

      {/* Thay đổi State khi click nút */}
      <button
        onClick={() => setIsVip(!isVip)}
        style={{
          padding: "10px",
          backgroundColor: isVip ? "#ff4757" : "#2ed573",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}>
        {isVip ? "Downgrade" : "Upgrade to VIP"}
      </button>
    </WrapperCard>
  );
}

export default User;
