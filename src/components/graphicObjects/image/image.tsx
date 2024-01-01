import { useState, RefObject } from "react";
import { ImageBlockProps } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import style from "./image.module.css";
import { useAppSelector } from "../../../redux/hooks";
type Props = {
  refItem: RefObject<HTMLImageElement>;
};
const Image = (props: Props) => {
  const { refItem } = props;
  const newElement = useAppSelector(
    (state) => state.newElement as ImageBlockProps
  );

  const styleProps = {
    left: 0,
    top: 0,
    width: `${newElement.width}px`,
  };

  return (
    <img
      ref={refItem}
      className={style.image}
      style={styleProps}
      src={newElement.url}
      alt={newElement.id}
    />
  );
};

export default Image;
