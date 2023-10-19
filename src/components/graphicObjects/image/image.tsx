import { ImageBlockProps } from "../../models/models";
import style from "./image.module.css";

const Image = (props: ImageBlockProps) => {
  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
  };

  return (
    <img
      className={style.image}
      style={styleProps}
      src={props.url}
      alt={props.id}
    />
  );
};

export default Image;
