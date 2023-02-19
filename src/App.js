import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
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
    <Wrapper>
      <Hello name="react" color="pink" />
      <Hello color="pink" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;
