import { TextBlockProps } from "../models/models";

import { useAppActions, useAppSelector } from "../../redux/hooks";
import { ChangeEvent } from "react";
import MenuColor from "../menuColor/menuColor";
import { doc } from "../models/data";

type Props = {
  styles: CSSModuleClasses;
};

const MenuText = (props: Props) => {
  const { styles } = props;
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
    <div className={styles.menuElement}>
      <MenuColor styles={styles} />
      <select
        className={`${styles.select} ${styles.menuInput}`}
        onChange={changeFont}
        name="fontSelect"
        id="fontSelect"
      >
        {dataMenuText.fonts.map((font) => (
          <option className={styles.selectOption} key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      <input
        className={`${styles.menuInput}`}
        onChange={changeTextSize}
        type="number"
        value={newElement.fontSize != 0 ? newElement.fontSize : ""}
      />
      <input
        className={`${styles.menuInput}`}
        onChange={changeTextElement}
        type="text"
        value={newElement!.value}
      />
      <div className={styles.menuTextStyleWrapper}>
        <label className={styles.menuBtn} htmlFor="bold">
          <img
            className={styles.meneTextStyleImg}
            src="../../../resource/icons/bold.png"
            alt=""
          />
        </label>
        <input
          className={styles.hidingInput}
          id="bold"
          onChange={changeTextStyle}
          type="checkbox"
          value={"bold"}
        />
        <label className={styles.menuBtn} htmlFor="italic">
          <img
            className={styles.meneTextStyleImg}
            src="../../../resource/icons/italic.png"
            alt=""
          />
        </label>
        <input
          className={styles.hidingInput}
          id="italic"
          onChange={changeTextStyle}
          type="checkbox"
          value={"italic"}
        />
        <label className={styles.menuBtn} htmlFor="underline">
          <img
            className={styles.meneTextStyleImg}
            src="../../../resource/icons/underline.png"
            alt=""
          />
        </label>
        <input
          className={styles.hidingInput}
          id="underline"
          onChange={changeTextStyle}
          type="checkbox"
          value={"underline"}
        />
      </div>
    </div>
  );
};

export default MenuText;
