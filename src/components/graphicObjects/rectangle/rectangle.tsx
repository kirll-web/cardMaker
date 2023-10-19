import { RectangleProps } from "../../models/models";
import style from "./rectangle.module.css";

const Rectangle = (props: RectangleProps) => {
  const styleProps = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
  };

  return <div className={style.rectangle} style={styleProps}></div>;
};

export default Rectangle;
