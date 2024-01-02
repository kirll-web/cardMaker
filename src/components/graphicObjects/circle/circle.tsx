import { CircleProps } from "../../models/models";
import style from "./circle.module.css";
import { useAppSelector } from "../../../redux/hooks";

const Circle = () => {
  const newElement = useAppSelector((state) => state.newElement as CircleProps);

  const styleProps = {
    backgroundImage: `${newElement.backgroundImage}`,
    backgroundColor: `${newElement.backgroundColor}`,
    left: 0,
    top: 0,
    width: `100%`,
    height: `100%`,
  };

  return <div className={style.circle} style={styleProps}></div>;
};

export default Circle;
