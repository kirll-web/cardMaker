import { RefObject, useState } from "react";

import { CircleProps } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import style from "./circle.module.css";
import { useAppSelector } from "../../../redux/hooks";
type Props = {
  refItem: RefObject<HTMLDivElement>;
};
const Circle = (props: Props) => {
  const newElement = useAppSelector((state) => state.newElement as CircleProps);

  const styleProps = {
    backgroundImage: `${newElement.backgroundImage}`,
    backgroundColor: `${newElement.backgroundColor}`,
    left: 0,
    top: 0,
    width: `${newElement.width}px`,
    height: `${newElement.height}px`,
  };

  return (
    <div ref={props.refItem} className={style.circle} style={styleProps}></div>
  );
};

export default Circle;
