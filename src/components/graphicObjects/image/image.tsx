import { useState, RefObject } from "react";
import { ImageBlockProps } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import style from "./image.module.css";

type Props = {
  props: ImageBlockProps;
  ref: RefObject<HTMLDivElement>;
};

const Image = (props: ImageBlockProps) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);

  const styleProps = {
    left: 0,
    top: 0,
    width: "100%",
    // height: `${state.height}px`,
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
