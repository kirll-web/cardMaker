import { ChangeEvent } from "react";
import { useAppActions, useAppSelector } from "../../redux/hooks";
import MenuColor from "../menuColor/menuColor";

import {
  TextBlockProps,
  ImageBlockProps,
  RectangleProps,
  CircleProps,
  FilterProps,
} from "../models/models";

const MenuFilter = () => {
  const newElement = useAppSelector((state) => state.newElement as FilterProps);
  const {
    addElementToPageAction,
    deleteNewElementAction,
    showMenuFilter,
    updateOpacityFilterNewElementAction,
  } = useAppActions();

  const addFilterToCanvas = () => {
    addElementToPageAction(
      newElement as
        | TextBlockProps
        | ImageBlockProps
        | RectangleProps
        | CircleProps
        | FilterProps
    );
    deleteNewElementAction();
    showMenuFilter(false);
  };

  const updateOpacityFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const opacity = e.target.value === "" ? 0 : parseFloat(e.target.value);
    console.log(opacity);
    updateOpacityFilterNewElementAction(opacity);
  };

  return (
    <div /*className={styles.menuFilter}*/>
      <MenuColor />
      <input onChange={updateOpacityFilter} type="number" />
      <button onClick={() => addFilterToCanvas()}>Сохранить фильтр</button>
    </div>
  );
};

export default MenuFilter;
