import { RefObject } from "react";

import { RectangleProps } from "../../models/models";
import style from "./rectangle.module.css";
import { useAppSelector } from "../../../redux/hooks";

const Rectangle = () => {
  const newElement = useAppSelector(
    (state) => state.newElement as RectangleProps
  );

  const styleProps = {
    backgroundImage: `${newElement.backgroundImage}`,
    backgroundColor: `${newElement.backgroundColor}`,
    left: 0,
    top: 0,
    width: `100%`,
    height: `100%`,
  };

  return <div className={style.rectangle} style={styleProps}></div>;
};

export default Rectangle;
