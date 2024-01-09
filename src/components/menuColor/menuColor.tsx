import {
  TextBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  Colors,
} from "../models/models";
import { MouseEvent } from "react";
import { useAppActions, useAppSelector } from "../../redux/hooks";

type Props = {
  styles: CSSModuleClasses;
};

const MenuColor = (props: Props) => {
  const { styles } = props;
  const colors = useAppSelector((state) => state.colors as Colors);
  const newElement = useAppSelector(
    (state) =>
      state.newElement as
        | TextBlockProps
        | CircleProps
        | RectangleProps
        | FilterProps
  );

  const { updateColorTextNewElementAction, addNewColor } = useAppActions();

  const changeColor = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    updateColorTextNewElementAction(element.getAttribute("data-color")!);
  };

  const addColor = () => {
    const color = prompt("Введите hex-код цвета, который вы хотите добавить:");
    var regxColor = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    if (regxColor.test(String(color))) {
      if (!colors.includes(String(color))) {
        addNewColor(String(color));
        updateColorTextNewElementAction(String(color));
      } else {
        alert("Такой цвет уже есть");
      }
    } else {
      alert("Вы ввели неверное значение");
    }
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
      <div onClick={addColor} className={styles.newColor}></div>
    </div>
  );
};

export default MenuColor;
