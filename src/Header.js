import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <p onClick={() => navigate("/")}>home</p>
      <p onClick={() => navigate("/profile")}>profile</p>
    </div>
  );
};
