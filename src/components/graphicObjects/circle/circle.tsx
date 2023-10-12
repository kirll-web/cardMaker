import { CircleProps } from "../../models/models";
import "./circle.css";

const Circle = (props: CircleProps) => {
  const style = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
    borderRadius: `${props.borderRadius}%`,
  };

  return <div className="circle" style={style}></div>;
};

export default Circle;
