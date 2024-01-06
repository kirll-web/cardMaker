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
import { useAppActions } from "../../redux/hooks";

const Menu = () => {
  const {
    addNewElementAction,
    showMenuTextAction,
    showMenuGraphicObjectAction,
    showMenuFilter,
    showMenuImage,
  } = useAppActions();

  const hideAllMenu = () => {
    showMenuTextAction(false);
    showMenuGraphicObjectAction(false);
    showMenuFilter(false);
    showMenuImage(false);
  };

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      ...defaultTextBlock,
      id: `text${Math.floor(Math.random() * 101)}`,
    };
    hideAllMenu();
    addNewElementAction(elem);
    showMenuTextAction(true);
  };

  const addImage = () => {
    const elem: ImageBlockProps = {
      ...defaultImage,
      id: `image${Math.floor(Math.random() * 101)}`,
    };
    hideAllMenu();
    addNewElementAction(elem);
    showMenuImage(true);
  };

  const addRectangle = () => {
    const elem: RectangleProps = {
      ...defaultRectangle,
      id: `rectangle${Math.floor(Math.random() * 101)}`,
    };
    hideAllMenu();
    addNewElementAction(elem);
    showMenuGraphicObjectAction(true);
  };

  const addCircle = () => {
    const elem: CircleProps = {
      ...defaultСircle,
      id: `filter${Math.floor(Math.random() * 101)}`,
    };
    hideAllMenu();
    addNewElementAction(elem);
    showMenuGraphicObjectAction(true);
  };

  const addFilter = () => {
    const elem: FilterProps = {
      ...defaultFilter,
      id: `filter${Math.floor(Math.random() * 101)}`,
    };

    hideAllMenu();
    addNewElementAction(elem);
    showMenuFilter(true);
  };

  const download = () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    var link = document.createElement("a");
    link.download = "filename.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="menu">
      <button onClick={addTextBlock}>Добавить текст</button>
      <button onClick={addCircle}>Добавить круг</button>
      <button onClick={addRectangle}>Добавить квадрат</button>
      <button onClick={addImage}>Добавить картинку</button>
      <button onClick={addFilter}>Добавить фильтр</button>
      <button onClick={download}>Скачать открытку</button>
    </div>
  );
};

export default Menu;
