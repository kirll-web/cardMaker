import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

import {
  defaultFilter,
  defaultImage,
  defaultСircle,
  defaultTextBlock,
  defaultRectangle,
} from "../models/data";
import { doc } from "../models/data";
import { useAppActions } from "../../redux/hooks";
import styles from "./menu.module.css";
import ButtonDownload from "../buttonDownload/buttonDownload";
import LoadInput from "../loadInput/loadInput";
import { ChangeEvent } from "react";
const Menu = () => {
  const {
    addNewElementAction,
    showMenuTextAction,
    showMenuGraphicObjectAction,
    showMenuFilter,
    showMenuSaveImage,
    showMenuTemplates,
    deleteNewElementAction,
    clearPageAction,
  } = useAppActions();

  const hideAllMenu = () => {
    showMenuTextAction(false);
    showMenuGraphicObjectAction(false);
    showMenuFilter(false);
    showMenuSaveImage(false);
    showMenuTemplates(false);
  };

  const clear = () => {
    hideAllMenu();
    deleteNewElementAction();
    clearPageAction();
  };

  const showMenuAndAddElement = (e: React.MouseEvent | ChangeEvent) => {
    const el = e.currentTarget as HTMLButtonElement;
    console.log(el);
    hideAllMenu();
    deleteNewElementAction();
    switch (el.getAttribute("data-menuname")) {
      case "text": {
        const elem: TextBlockProps = {
          ...defaultTextBlock,
          id: `text${Math.floor(Math.random() * 101)}`,
        };
        addNewElementAction(elem);
        showMenuTextAction(true);
        break;
      }
      case "circle": {
        const elem: CircleProps = {
          ...defaultСircle,
          id: `filter${Math.floor(Math.random() * 101)}`,
        };
        addNewElementAction(elem);
        showMenuGraphicObjectAction(true);
        break;
      }
      case "rectangle": {
        const elem: RectangleProps = {
          ...defaultRectangle,
          id: `rectangle${Math.floor(Math.random() * 101)}`,
        };
        addNewElementAction(elem);
        showMenuGraphicObjectAction(true);
        break;
      }
      case "image": {
        const { allowedFormatImage } = doc;
        const target = e.target as HTMLInputElement;

        let file = target["files"]![0];
        const img = document.createElement("img");
        const objectURL = URL.createObjectURL(file);
        const isFormat = (format: string) => `image/${format}` == file.type;
        img.src = objectURL;

        document.body.appendChild(img);
        if (allowedFormatImage.some(isFormat)) {
          let reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function () {
            img.onload = function handleLoad() {
              console.log(`Width: ${img.width}, Height: ${img.height}`);

              if (img.width > doc.page.width || img.height > doc.page.height) {
                alert(
                  "Изображение слишком больше и не может быть добавлено на холст"
                );
              } else {
                const elem: ImageBlockProps = {
                  ...defaultImage,
                  id: `image${Math.floor(Math.random() * 101)}`,
                  url: String(reader.result),
                  width: img.width,
                  height: img.height,
                  xPos: (doc.page.width - img.width) / 2,
                  yPos: (doc.page.height - img.height) / 2,
                };
                addNewElementAction(elem);
              }
            };
            img.remove();
          };
        } else {
          alert("Неверный формат изображения");
        }
        break;
      }
      case "filter": {
        const elem: FilterProps = {
          ...defaultFilter,
          id: `filter${Math.floor(Math.random() * 101)}`,
        };
        addNewElementAction(elem);
        showMenuFilter(true);
        break;
      }
      case "templates": {
        showMenuTemplates(true);
        break;
      }
      case "saveImage": {
        showMenuSaveImage(true);
        break;
      }
    }
  };

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <ButtonDownload styles={styles} />
        <LoadInput styles={styles} />
        <button
          title="Добавить текст"
          className={styles.menuBtn}
          onClick={showMenuAndAddElement}
          data-menuname="text"
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/text.png"
            alt="Добавить текст"
          />
        </button>
        <button
          title="Добавить круг"
          className={styles.menuBtn}
          onClick={showMenuAndAddElement}
          data-menuname="circle"
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/circle.png"
            alt="Добавить круг"
          />
        </button>
        <button
          title="Добавить квадрат"
          className={styles.menuBtn}
          onClick={showMenuAndAddElement}
          data-menuname="rectangle"
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/rectangle.png"
            alt="Добавить квадрат"
          />
        </button>
        <label
          title="Добавить картинку"
          htmlFor="inputImage"
          className={styles.menuBtn}
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/image.png"
            alt="Добавить картинку"
          />
        </label>
        <input
          onChange={showMenuAndAddElement}
          className={styles.hidingInput}
          type="file"
          id="inputImage"
          data-menuname="image"
        />
        <button
          title="Добавить фильтр"
          className={styles.menuBtn}
          onClick={showMenuAndAddElement}
          data-menuname="filter"
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/filter.png"
            alt="Добавить фильтр"
          />
        </button>
        <button
          title="Выбрать шаблон"
          className={styles.menuBtn}
          data-menuname="templates"
          onClick={showMenuAndAddElement}
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/templates.png"
            alt="Выбрать шаблон"
          />
        </button>
        <button
          title="Очистить холст"
          className={styles.menuBtn}
          data-menuname="clear"
          onClick={clear}
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/bin.png"
            alt="Очистить холст"
          />
        </button>
        <button
          title="Скачать открытку"
          className={styles.menuBtn}
          onClick={showMenuAndAddElement}
          data-menuname="saveImage"
        >
          <img
            className={styles.menuImg}
            src="../../../resource/icons/downloadCard.png"
            alt="Скачать открытку"
          />
        </button>
      </div>
    </div>
  );
};

export default Menu;
