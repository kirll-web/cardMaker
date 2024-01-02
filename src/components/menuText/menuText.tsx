import { DataMenuText, TextBlockProps } from "../models/models";
import { Dispatch, MouseEvent, SetStateAction, ChangeEvent } from "react";

import { useAppActions, useAppSelector } from "../../redux/hooks";

import {} from "../models/models";
import styles from "./menuText.module.css";

type Props = {
  dataMenuText: DataMenuText;
  defaultMenuText: TextBlockProps;
  newElement: TextBlockProps;
  setNewElement: Dispatch<SetStateAction<TextBlockProps>>;
};

const MenuText = (props: Props) => {
  const { dataMenuText } = props;

  const newElement = useAppSelector(
    (state) => state.newElement as TextBlockProps
  );
  const {
    updateBoldTextNewElementAction,
    updateColorTextNewElementAction,
    updateFontFamilyNewElementAction,
    updateFontSizeTextNewElementAction,
    updateValueTextNewElementAction,
    updateItalicTextNewElementAction,
    updateUnderlineTextNewElementAction,
  } = useAppActions();

  const changeColor = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    updateColorTextNewElementAction(element.getAttribute("data-color")!);
  };

  const changeFont = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    updateFontFamilyNewElementAction(target.value!);
  };

  const changeTextStyle = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "bold":
        updateBoldTextNewElementAction(e.target.checked);
        break;
      case "italic":
        updateItalicTextNewElementAction(e.target.checked);
        break;
      case "underline":
        updateUnderlineTextNewElementAction(e.target.checked);
        break;
    }
  };

  const changeTextElement = (e: ChangeEvent<HTMLInputElement>) => {
    updateValueTextNewElementAction(e.target.value);
  };

  const changeTextSize = (e: ChangeEvent<HTMLInputElement>) => {
    const fontSize = e.target.value === "" ? 0 : parseInt(e.target.value);
    updateFontSizeTextNewElementAction(fontSize);
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
                newElement.color === color ? styles.checkedColorCheckbox : null
              }`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        ))}
      </div>
      <input onChange={changeTextSize} type="number" />
      <input
        onChange={changeTextElement}
        type="text"
        value={newElement!.value}
      />
      <input onChange={changeTextStyle} type="checkbox" value={"bold"} />
      <input onChange={changeTextStyle} type="checkbox" value={"italic"} />
      <input onChange={changeTextStyle} type="checkbox" value={"underline"} />
    </div>
  );
};

export default MenuText;
