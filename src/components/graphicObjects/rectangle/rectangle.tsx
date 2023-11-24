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
    width: `${state.width}px`,
    height: `${state.height}px`,
    left: `${state.xPos}px`,
    top: `${state.yPos}px`,
  };

  return (
    <div className={style.rectangle} style={styleProps}>
      {activeSelectionArea ? (
        <SelectionArea
          {...{
            type: "selectionArea",
            width: state.width,
            height: state.height,
            xPos: state.xPos,
            yPos: state.yPos,
          }}
        />
      ) : null}
    </div>
  );
};

export default Rectangle;
