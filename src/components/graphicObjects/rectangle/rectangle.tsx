import { RefObject } from "react";

import { RectangleProps } from "../../models/models";
import style from "./rectangle.module.css";
import { useAppSelector } from "../../../redux/hooks";
type Props = {
  refItem: RefObject<HTMLDivElement>;
};
const Rectangle = (props: Props) => {
  const newElement = useAppSelector(
    (state) => state.newElement as RectangleProps
  );

  const styleProps = {
    backgroundImage: `${newElement.backgroundImage}`,
    backgroundColor: `${newElement.backgroundColor}`,
    left: 0,
    top: 0,
    width: `${newElement.width}px`,
    height: `${newElement.height}px`,
  };

  return (
    <div
      ref={props.refItem}
      className={style.rectangle}
      style={styleProps}
    ></div>
  );
};

export default Rectangle;
