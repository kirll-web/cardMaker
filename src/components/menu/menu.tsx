import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  MenuText,
} from "../models/models";

import {
  defaultFilter,
  defaultImage,
  defaultСircle,
  defaultTextBlock,
  defaultRectangle,
} from "../models/data";

const Menu = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const showMenuText = useSelector((state) => state.showMenuText);

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      ...defaultTextBlock,
      id: `text${Math.floor(Math.random() * 101)}`,
    };
    dispatch({ type: "SHOW_MENUTEXT", show: true });
    dispatch({ type: "ADD_ELEMENT", element: elem });
  };

  const addImage = () => {
    const elem: ImageBlockProps = {
      ...defaultImage,
      id: `image${Math.floor(Math.random() * 101)}`,
    };
    dispatch({ type: "ADD_ELEMENT", element: elem });
  };

  const addRectangle = () => {
    const elem: RectangleProps = {
      ...defaultRectangle,
      id: `rectangle${Math.floor(Math.random() * 101)}`,
    };
    dispatch({ type: "ADD_ELEMENT", element: elem });
  };

  const addCircle = () => {
    const elem: CircleProps = {
      ...defaultСircle,
      id: `filter${Math.floor(Math.random() * 101)}`,
    };
    dispatch({ type: "ADD_ELEMENT", element: elem });
  };

  const addFilter = () => {
    const elem: FilterProps = {
      ...defaultFilter,
      id: `filter${Math.floor(Math.random() * 101)}`,
    };
    dispatch({ type: "ADD_ELEMENT", element: elem });
  };

  return (
    <div className="menu">
      <button onClick={addTextBlock}>Добавить текст</button>
      <button onClick={addCircle}>Добавить круг</button>
      <button onClick={addRectangle}>Добавить квадрат</button>
      <button onClick={addImage}>Добавить картинку</button>
    </div>
  );
};

export default Menu;
