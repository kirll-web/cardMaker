import { CircleProps } from "../../models/models";
import "./circle.css";

const Circle = (props: CircleProps) => {
  const styleRectangle = {
    id: props.id,
    type: "rectangle",
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
    borderRadius: `${props.borderRadius}%`,
  };

  return <div className="circle" style={styleRectangle}></div>;
};

export default Circle;
