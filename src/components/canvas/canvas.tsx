import { PageProps } from "../models/models";

import TextBlock from "../textBlock/textBlock";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Circle from "../graphicObjects/circle/circle";
import "./canvas.css";

const Canvas = (props: PageProps) => {
  const stylePage = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.yPos}%`,
    left: `${props.xPos}%`,
    background: "#000000",
  };

  const styleTextBlock = {
    type: "text",
    id: "10",
    width: 100,
    height: 20,
    xPos: 20,
    yPos: 0,
    fontSize: 20,
    fontFamily: "Roboto",
    color: "#ffffff",
    bold: false,
    value: ["asddas", "asdasd", "asdasd"],
  };

  const styleRectangle = {
    type: "rectangle",
    id: "rect1",
    backgroundImage: "",
    backgroundColor: "red",
    width: 20,
    height: 20,
    xPos: 70,
    yPos: 70,
  };

  const styleCircle1 = {
    type: "circle1",
    id: "rect1",
    backgroundImage: "",
    backgroundColor: "red",
    width: 50,
    height: 50,
    xPos: 140,
    yPos: 140,
    borderRadius: 50,
  };

  const styleCircle2 = {
    type: "circle2",
    id: "rect1",
    backgroundImage: "",
    backgroundColor: "green",
    width: 50,
    height: 50,
    xPos: 140,
    yPos: 140,
    borderRadius: 40,
  };

  return (
    <div className="page" style={stylePage}>
      <TextBlock {...styleTextBlock} />
      <Rectangle {...styleRectangle} />
      <Circle {...styleCircle1} />
      <Circle {...styleCircle2} />
    </div>
  );
};

export default Canvas;
