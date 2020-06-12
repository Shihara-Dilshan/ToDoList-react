import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h4>TodoList</h4>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "5px",
};

export default Header;
