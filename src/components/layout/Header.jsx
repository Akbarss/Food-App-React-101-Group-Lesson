import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: 3, width: "100%" }}>
      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <NavLink to={"/"} style={{ color: "#fff" }}>
          Home
        </NavLink>
        <NavLink to={"/about"} style={{ color: "#fff" }}>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
