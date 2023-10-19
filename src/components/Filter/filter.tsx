import { FilterProps } from "../models/models";
import style from "./filter.module.css";

const Filter = (props: FilterProps) => {
  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
    opacity: props.opacity,
    backgroundColor: props.colorOfFilter,
  };

  return <div className={style.filter} style={styleProps}></div>;
};

export default Filter;
