import { RefObject } from "react";

import { FilterProps } from "../models/models";
import style from "./filter.module.css";
import { useAppSelector } from "../../redux/hooks";

const Filter = () => {
  const newElement = useAppSelector((state) => state.newElement as FilterProps);
  const styleProps = {
    opacity: newElement.opacity,
    backgroundColor: newElement.colorOfFilter,
    width: newElement.width,
    height: newElement.height,
  };

  return <div className={style.filter} style={styleProps}></div>;
};

export default Filter;
