import { TextBlockProps } from "../models/models";
import "./textBlock.css";

const TextBlock = (props: TextBlockProps) => {
  const textBlockData = {
    id: props.id,
    type: "text",
    data: ["as", "asdasd", "asdasd"],
  };

  const styleData = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.yPos}px`,
    left: `${props.xPos}px`,
    fontSize: `${props.fontSize}px`,
    fontFamily: `${props.fontFamily}`,
    color: `${props.color}`,
    fontWeight: props.bold ? "900" : "300",
  };

  return (
    <p className="textBlock" style={styleData}>
      {textBlockData.data.join(" ")}
    </p>
  );
};

export default TextBlock;
