import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <div className="App">
      <h2>Button 컴포넌트(stateless)</h2>
      <Button>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
}

export default App;
