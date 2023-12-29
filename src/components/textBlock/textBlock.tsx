import { useState } from "react";

import { TextBlockProps } from "../models/models";

import style from "./textBlock.module.css";

const TextBlock = (props: TextBlockProps) => {
  // const [state, setState] = useState(props);
  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    fontSize: `${props.fontSize}px`,
    fontFamily: `${props.fontFamily}, sans-serif`,
    color: `${props.color}`,
    fontWeight: props.bold ? "700" : "400",
    fontStyle: props.italic ? "italic" : null,
    textDecoration: props.underline ? "underline" : null,
  };

  return (
    <div
      onClick={(e: React.MouseEvent) => e.preventDefault()}
      className={style.textBlock}
      style={styleProps}
    >
      {props.value}
    </div>
  );
};

export default TextBlock;
