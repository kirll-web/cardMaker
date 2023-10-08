import React from "react";
import "./App.css";
import { Page } from "../canvas/canvas";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page
          {...{
            id: "id",
            xPos: 50,
            yPos: 50,
            width: 200,
            height: 200,
            elements: [],
          }}
        />
      </div>
    );
  }
}

export default App;
