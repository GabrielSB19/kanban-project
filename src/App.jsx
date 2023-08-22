import { useState } from "react";
import Kanban from "./components/kanban/Kanban";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Kanban UI</h1>
      <Kanban />
    </div>
  );
}

export default App;
