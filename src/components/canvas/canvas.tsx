import { PageProps } from "../models/models";

import Filter from "../filter/filter";
import TextBlock from "../textBlock/textBlock";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Circle from "../graphicObjects/circle/circle";
import Image from "../graphicObjects/image/image";

import "./canvas.css";

const Canvas = (props: PageProps) => {
  const stylePage = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.yPos}%`,
    left: `${props.xPos}%`,
    background: "#000000",
  };

  return (
    <div className="page" style={stylePage}>
      {props.elements.map((el, index) => {
        if (el.hasOwnProperty("type")) {
          if (el.type == "text") {
            return <TextBlock {...el} key={index} />;
          }
          if (el.type == "filter") {
            return <Filter {...el} key={index} />;
          }
          if (el.type == "circle") {
            return <Circle {...el} key={index} />;
          }
          if (el.type == "rectangle") {
            return <Rectangle {...el} key={index} />;
          }
          if (el.type == "image") {
            return <Image {...el} key={index} />;
          }
        }
      })}
    </div>
  );
};

export default Canvas;
