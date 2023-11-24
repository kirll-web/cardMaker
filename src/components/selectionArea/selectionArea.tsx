import { SelectionAreaProps } from "../models/models";
import styles from "./selectionArea.module.css";

const SelectionArea = (props: SelectionAreaProps) => {
  const sizesSelectionArea = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.xPos}px`,
    left: `${props.yPos}px`,
  };
  return (
    <div style={sizesSelectionArea} className={styles.selectionArea}></div>
  );
};

export default SelectionArea;
