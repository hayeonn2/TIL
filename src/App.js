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
      <Hello name="react" color="pink" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
