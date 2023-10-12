import { FilterProps } from "../models/models";

const Filter = (props: FilterProps) => {
  const style = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.xPos}px`,
    top: `${props.yPos}px`,
    opacity: props.opacity,
    backgroundColor: props.colorOfFilter,
  };

  return <div style={style}></div>;
};

export default Filter;
