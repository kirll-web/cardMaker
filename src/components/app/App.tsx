import React from "react";
import "./App.css";
import Canvas from "../canvas/canvas";
import { Page } from "../models/models";

const App = () => {
  const page: Page = {
    id: "page1",
    width: 800,
    height: 600,
    yPos: 50,
    xPos: 50,
    elements: [],
  };

  return (
    <div className="App">
      <Canvas {...page} />
    </div>
  );
};

export default App;
