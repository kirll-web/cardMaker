import { useState } from "react";

import { TextBlockProps } from "../models/models";

import style from "./textBlock.module.css";

const TextBlock = (props: TextBlockProps) => {
  const [state, setState] = useState(props);
  const styleProps = {
    width: `${state.width}px`,
    height: `${state.height}px`,
    fontSize: `${state.fontSize}px`,
    fontFamily: `${state.fontFamily}`,
    color: `${state.color}`,
    fontWeight: state.bold ? "900" : "300",
  };

  return (
    <div
      onClick={(e: React.MouseEvent) => e.preventDefault()}
      className={style.textBlock}
      style={styleProps}
    >
      {state.value}
    </div>
  );
};

export default TextBlock;
