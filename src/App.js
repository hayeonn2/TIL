import React from "react";
import Hello from "./Hello";

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
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}

export default App;
