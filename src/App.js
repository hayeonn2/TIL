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
      {/* 주석은 안보여! */}
      /* 중괄호로 안감싸면 보인다! */ // 이건? 이것도 보여!
      <Hello
      // 근데 여기서는 사용할 수 있지롱!
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
