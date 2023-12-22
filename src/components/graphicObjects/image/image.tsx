import { useState } from "react";
import { ImageBlockProps } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import style from "./image.module.css";

const Image = (props: ImageBlockProps) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);

  const styleProps = {
    left: 0,
    top: 0,
    width: `${state.width}px`,
    height: `${state.height}px`,
  };

  return (
    <img
      className={style.image}
      style={styleProps}
      src={state.url}
      alt={state.id}
    />
  );
};

export default Image;
