import { DataMenuText, TextBlockProps } from "../models/models";
import { Dispatch, MouseEvent, SetStateAction, ChangeEvent } from "react";

import { useAppActions, useAppSelector } from "../../redux/hooks";

import MenuColor from "../menuColor/menuColor";
import styles from "./menuText.module.css";
import { doc } from "../models/data";

const MenuText = () => {
  const { dataMenuText } = doc;

  const newElement = useAppSelector(
    (state) => state.newElement as TextBlockProps
  );
  const {
    updateBoldTextNewElementAction,
    updateFontFamilyNewElementAction,
    updateFontSizeTextNewElementAction,
    updateValueTextNewElementAction,
    updateItalicTextNewElementAction,
    updateUnderlineTextNewElementAction,
  } = useAppActions();

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
      <MenuColor />
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
