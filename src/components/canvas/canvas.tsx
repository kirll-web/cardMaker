import {
  PageProps,
  FilterProps,
  TextBlockProps,
  RectangleProps,
  CircleProps,
  ImageBlockProps,
} from "../models/models";

import Filter from "../filter/filter";
import TextBlock from "../textBlock/textBlock";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Circle from "../graphicObjects/circle/circle";
import Image from "../graphicObjects/image/image";

import styles from "./canvas.module.css";

const Canvas = (props: PageProps) => {
  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.yPos}%`,
    left: `${props.xPos}%`,
  };

  return (
    <div className={styles.page} style={styleProps}>
      {props.elements.map((el, index) => {
        switch (el.type) {
          case "text":
            return <TextBlock {...el} key={index} />;
          case "filter":
            return <Filter {...el} key={el.id} />;
          case "circle":
            return <Circle {...el} key={index} />;
          case "rectangle":
            return <Rectangle {...el} key={index} />;
          case "image":
            return <Image {...el} key={index} />;
        }
      })}
    </div>
  );
};

export default Canvas;
