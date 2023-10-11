import { RectangleProps } from "../../models/models";
import "./rectangle.css";

const Rectangle = (props: RectangleProps) => {
  const styleRectangle = {
    id: props.id,
    type: "rectangle",
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
  };

  return <div className="rectangle" style={styleRectangle}></div>;
};

export default Rectangle;
