import { TextBlockProps } from "../models/models";
import style from "./textBlock.module.css";

const TextBlock = (props: TextBlockProps) => {
  const textBlockData = {
    id: props.id,
    type: "text",
    data: ["as", "asdasd", "asdasd"],
  };

  const styleProps = {
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
    <p className={style.textBlock} style={styleProps}>
      {textBlockData.data.join(" ")}
    </p>
  );
};

export default TextBlock;
