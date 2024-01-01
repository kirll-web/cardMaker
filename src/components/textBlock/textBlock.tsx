import { RefObject, useState } from "react";

import { TextBlockProps } from "../models/models";

import style from "./textBlock.module.css";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  refItem: RefObject<HTMLDivElement>;
};

const TextBlock = (props: Props) => {
  const newElement = useAppSelector(
    (state) => state.newElement as TextBlockProps
  );

  const styleProps = {
    fontSize: `${newElement.fontSize}px`,
    fontFamily: `${newElement.fontFamily}, sans-serif`,
    color: `${newElement.color}`,
    fontWeight: newElement.bold ? "700" : "400",
    fontStyle: newElement.italic ? "italic" : "normal",
    textDecoration: newElement.underline ? "underline" : "none",
  };

  return (
    <div
      ref={props.refItem}
      onClick={(e: React.MouseEvent) => e.preventDefault()}
      className={style.textBlock}
      style={styleProps}
    >
      {newElement.value}
    </div>
  );
};

export default TextBlock;
