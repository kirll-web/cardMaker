import { ImageBlockProps } from "../../models/models";
import style from "./image.module.css";
import { useAppSelector } from "../../../redux/hooks";

const Image = () => {
  const newElement = useAppSelector(
    (state) => state.newElement as ImageBlockProps
  );

  const styleProps = {
    left: 0,
    top: 0,
    width: `100%`,
  };

  return (
    <img
      className={style.image}
      style={styleProps}
      src={newElement.url}
      alt={newElement.id}
    />
  );
};

export default Image;
