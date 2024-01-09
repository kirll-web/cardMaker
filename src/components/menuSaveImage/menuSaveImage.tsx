import { ChangeEvent } from "react";
import { useAppActions, useAppSelector } from "../../redux/hooks";

type Props = {
  styles: CSSModuleClasses;
};

const MenuSaveImage = (props: Props) => {
  const { styles } = props;
  const { changeFormatSaveImageImage } = useAppActions();
  const menuSaveImage = useAppSelector((state) => state.menuSaveImage);

  const download = () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    var link = document.createElement("a");
    link.download = `filename.${menuSaveImage.format as string}`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const changeFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    changeFormatSaveImageImage(target.value);
  };

  return (
    <div className={styles.menuElement}>
      <label className={styles.menuLabel} htmlFor="format">
        Выберите формат:{" "}
      </label>
      <select
        className={`${styles.select} ${styles.menuInput}`}
        onChange={changeFormat}
        name="format"
        id="format"
      >
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
      </select>
      <button className={styles.menuBigButton} onClick={download}>
        Сохранить
      </button>
    </div>
  );
};

export default MenuSaveImage;
