import React from "react";
import "./App.css";
import WorldStats from "./components/WorldStats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <WorldStats/>
          {/* <WorldGraphs /> */}
          {/* <WorldTable /> */}
      </header>
    </div>
  );
}

export default App;

