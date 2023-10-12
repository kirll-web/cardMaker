import { PageProps } from "../models/models";

import TextBlock from "../textBlock/textBlock";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Circle from "../graphicObjects/circle/circle";
import Image from "../graphicObjects/image/image";
import Filter from "../Filter/Filter";
import "./canvas.css";

const Canvas = (props: PageProps) => {
  const stylePage = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.yPos}%`,
    left: `${props.xPos}%`,
    background: "#000000",
  };

  const textBlockProps = {
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

  const rectangleProps = {
    type: "rectangle",
    id: "rect1",
    backgroundImage: "",
    backgroundColor: "red",
    width: 20,
    height: 20,
    xPos: 70,
    yPos: 70,
  };

  const circle1Props = {
    type: "circle",
    id: "rect1",
    backgroundImage: "",
    backgroundColor: "red",
    width: 50,
    height: 50,
    xPos: 140,
    yPos: 140,
    borderRadius: 50,
  };

  const circle2Props = {
    type: "circle",
    id: "rect1",
    backgroundImage: "",
    backgroundColor: "green",
    width: 50,
    height: 50,
    xPos: 140,
    yPos: 140,
    borderRadius: 40,
  };

  const imageProps = {
    id: "img1",
    type: "image",
    width: 400,
    height: 200,
    xPos: 300,
    yPos: 100,
    url: "https://w.forfun.com/fetch/c5/c514ddd3da0d86f1348f4b10560f7f35.jpeg",
    allowedFormat: ["JPEG", "PNG"],
  };

  const filterProps = {
    id: "filter1",
    type: "filter",
    width: 800,
    height: 600,
    xPos: 0,
    yPos: 0,
    opacity: 0.5,
    colorOfFilter: "#f901cd",
  };

  return (
    <div className="page" style={stylePage}>
      <TextBlock {...textBlockProps} />
      <Rectangle {...rectangleProps} />
      <Circle {...circle1Props} />
      <Circle {...circle2Props} />
      <Image {...imageProps} />
      <Filter {...filterProps} />
    </div>
  );
};

export default Canvas;
