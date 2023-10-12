import { ImageBlockProps } from "../../models/models";
import "./image.css";

const Image = (props: ImageBlockProps) => {
  const style = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
  };

  return <img className="image" style={style} src={props.url} alt={props.id} />;
};

export default Image;
