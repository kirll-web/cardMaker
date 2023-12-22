import { useState } from "react";
import SelectionArea from "../../selectionArea/selectionArea";

import { RectangleProps } from "../../models/models";
import style from "./rectangle.module.css";

const Rectangle = (props: RectangleProps) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);

  const styleProps = {
    backgroundImage: `${state.backgroundImage}`,
    backgroundColor: `${state.backgroundColor}`,
    left: 0,
    top: 0,
    width: `${state.width}px`,
    height: `${state.height}px`,
  };

  return <div className={style.rectangle} style={styleProps}></div>;
};

export default Rectangle;
