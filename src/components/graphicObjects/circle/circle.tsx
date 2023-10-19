import { CircleProps } from "../../models/models";
import style from "./circle.module.css";

const Circle = (props: CircleProps) => {
  const styleProps = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
    borderRadius: `${props.borderRadius}%`,
  };

  return <div className={style.circle} style={styleProps}></div>;
};

export default Circle;
