import React from "react";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "hayeon";
  const style = {
    backgroundColor: "skyblue",
    color: "navy",
    fontSize: "24",
    padding: "1rem",
  };
  return (
    <>
      <Hello name="react" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
