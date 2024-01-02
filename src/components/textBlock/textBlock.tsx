import { TextBlockProps } from "../models/models";

import style from "./textBlock.module.css";
import { useAppSelector } from "../../redux/hooks";

const TextBlock = () => {
  const newElement = useAppSelector(
    (state) => state.newElement as TextBlockProps
  );

  const styleProps = {
    fontSize: `${newElement.fontSize}px`,
    fontFamily: `${newElement.fontFamily}, sans-serif`,
    color: `${newElement.backgroundColor}`,
    fontWeight: newElement.bold ? "700" : "400",
    fontStyle: newElement.italic ? "italic" : "normal",
    borderBottom: newElement.underline
      ? `3px solid ${newElement.backgroundColor}`
      : "none",
  };

  return (
    <div
      onClick={(e: React.MouseEvent) => e.preventDefault()}
      className={style.textBlock}
      style={styleProps}
    >
      {newElement.value}
    </div>
  );
};

export default TextBlock;
