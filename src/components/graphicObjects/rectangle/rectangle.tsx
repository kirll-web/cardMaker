import { RectangleProps } from "../../models/models";
import "./rectangle.css";

const Rectangle = (props: RectangleProps) => {
  const style = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
  };

  return <div className="rectangle" style={style}></div>;
};

export default Rectangle;
