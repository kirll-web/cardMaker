import { Page } from "../models/models";
import React, { Component, ReactNode } from "react";
import TextArea from "../textBlock/textBlock";

import "./canvas.css";

const Canvas = (props: Page) => {
  const stylePage = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.yPos}%`,
    left: `${props.xPos}%`,
    background: "#000000",
  };

  const styleTextBlock = {
    id: "10",
    width: 100,
    height: 20,
    xPos: 0,
    yPos: 0,
    fontSize: 20,
    fontFamily: "Roboto",
    color: "#ffffff",
    bold: false,
  };

  return (
    <div className="page" style={stylePage}>
      <TextArea {...styleTextBlock} />
    </div>
  );
};

export default Canvas;
