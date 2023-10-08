import { Page } from "../models/models";
import "./canvas.css";

const Canvas = (props: Page) => {
  return (
    <div
      className="page"
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        top: `${props.yPos}%`,
        left: `${props.xPos}%`,
        background: "#000000",
      }}
    >
      asdasdas
    </div>
  );
};

export { Canvas as Page };
