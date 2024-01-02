import { Dispatch, SetStateAction } from "react";

import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

type props = {
  addElement: (
    elemt:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => void;
  defaultMenuText: TextBlockProps;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const Menu = (props: props) => {
  const { addElement, defaultMenuText, setShowMenuText } = props;

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      type: "text",
      id: defaultMenuText.value,
      xPos: 400,
      yPos: 400,
      fontSize: defaultMenuText.fontSize,
      fontFamily: defaultMenuText.fontFamily,
      color: defaultMenuText.color,
      bold: defaultMenuText.bold,
      italic: defaultMenuText.italic,
      underline: defaultMenuText.underline,
      value: defaultMenuText.value,
    };
    setShowMenuText(() => true);
    addElement(elem);
  };

  const addImage = () => {
    const elem: ImageBlockProps = {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../resource/1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    };
    addElement(elem);
  };

  const addRectangle = () => {
    const elem: RectangleProps = {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#6aa449",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 300,
    };
    addElement(elem);
  };

  const addCircle = () => {
    const elem: CircleProps = {
      id: "circle2",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 400,
      height: 400,
      xPos: 400,
      yPos: 400,
    };
    addElement(elem);
  };

  // const addFilter = () => {
  //   const elem: FilterProps = {
  //     colorOfFilter: "#3fc11c",
  //     name: "greenFilter",
  //     type: "filter",
  //     id: "filter1",
  //     opacity: 0.5,
  //     width: 800,
  //     height: 600,
  //     xPos: 0,
  //     yPos: 0,
  //   };
  //   addElement(elem);
  // };

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
