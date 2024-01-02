import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  Colors,
} from "../models/models";
import { doc } from "../models/data";
import { MouseEvent } from "react";
import { useAppActions, useAppSelector } from "../../redux/hooks";
import styles from "./menuColor.module.css";

const MenuColor = () => {
  const { colors } = doc;
  console.log(colors);
  const newElement = useAppSelector(
    (state) =>
      state.newElement as
        | TextBlockProps
        | CircleProps
        | RectangleProps
        | FilterProps
  );

  const { updateColorTextNewElementAction } = useAppActions();

  const changeColor = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    updateColorTextNewElementAction(element.getAttribute("data-color")!);
  };

  return (
    <div id="selectColor" className={styles.selectColor}>
      {colors.map((color: string) => (
        <div key={color} className={styles.colorCheckboxWrapper}>
          <div
            onClick={changeColor}
            data-color={color}
            className={`${styles.colorLabel} ${
              newElement.backgroundColor === color
                ? styles.checkedColorCheckbox
                : null
            }`}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MenuColor;
