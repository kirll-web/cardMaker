import { DataMenuText, MenuText as MenuTextType } from "../models/models";
import {
  Dispatch,
  HTMLInputTypeAttribute,
  MouseEvent,
  SetStateAction,
  ChangeEvent,
} from "react";

import styles from "./menuText.module.css";

type Props = {
  dataMenuText: DataMenuText;
  stateMenuText: MenuTextType;
  setStateMenuText: Dispatch<SetStateAction<MenuTextType>>;
  setNewElement: Dispatch<SetStateAction<MenuTextType>>;
};

const MenuText = (props: Props) => {
  const { dataMenuText, stateMenuText, setStateMenuText } = props;

  const changeColor = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    setStateMenuText((stateMenu) => ({
      ...stateMenu,
      color: element.getAttribute("data-color")!,
    }));
    setNewElement: (newElement) => ({
      ...newElement,
      color: element.getAttribute("data-color")!,
    });
  };

  const changeFont = (e: MouseEvent<HTMLInputElement>) => {
    setStateMenuText((stateMenu) => ({
      ...stateMenu,
      font: e.currentTarget.value,
    }));
    setNewElement: (newElement) => ({
      ...newElement,
      font: e.currentTarget.value,
    });
  };

  const changeTextStyle = (e: ChangeEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement;
    setStateMenuText((stateMenu) => ({
      ...stateMenu,
      [`${e.target.value}`]: e.target.checked,
    }));
    setNewElement: (newElement) => ({
      ...newElement,
      [`${e.target.value}`]: e.target.checked,
    });
    console.log(e.target.value);
  };

  return (
    <div className="menuText">
      <select onChange={changeFont} name="fontSelect" id="fontSelect">
        {dataMenuText.fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
      <div id="selectColor" className={styles.selectColor}>
        {dataMenuText.colors.map((color) => (
          <div key={color} className={styles.colorCheckboxWrapper}>
            <div
              onClick={changeColor}
              data-color={color}
              className={`${styles.colorLabel} ${
                stateMenu.color === color ? styles.checkedColorCheckbox : null
              }`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        ))}
      </div>
      <input onChange={changeTextStyle} type="checkbox" value={"bold"} />
      <input onChange={changeTextStyle} type="checkbox" value={"italic"} />
      <input onChange={changeTextStyle} type="checkbox" value={"underline"} />
    </div>
  );
};

export default MenuText;
