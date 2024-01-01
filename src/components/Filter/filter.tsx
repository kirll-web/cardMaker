import { RefObject } from "react";

import { FilterProps } from "../models/models";
import style from "./filter.module.css";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  refItem: RefObject<HTMLDivElement>;
};

const Filter = (props: Props) => {
  const newElement = useAppSelector((state) => state.newElement as FilterProps);
  const styleProps = {
    opacity: newElement.opacity,
    backgroundColor: newElement.colorOfFilter,
  };

  return (
    <div ref={props.refItem} className={style.filter} style={styleProps}></div>
  );
};

export default Filter;
