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
};

const Menu = (props: props) => {
  const { addElement } = props;

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      type: "text",
      id: "asdasd223",
      width: 200,
      height: 100,
      xPos: 400,
      yPos: 400,
      fontSize: 20,
      fontFamily: `Roboto`,
      color: `#ff00e4`,
      bold: false,
      value: "Добавить текст",
    };
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

  const addFilter = () => {
    const elem: FilterProps = {
      colorOfFilter: "#3fc11c",
      name: "greenFilter",
      type: "filter",
      id: "filter1",
      opacity: 0.5,
      width: 800,
      height: 600,
      xPos: 0,
      yPos: 0,
    };
    addElement(elem);
  };

  return (
    <div className="menu">
      <button onClick={addTextBlock}>Добавить текст</button>
      <button onClick={addCircle}>Добавить круг</button>
      <button onClick={addRectangle}>Добавить квадрат</button>
      <button onClick={addImage}>Добавить картинку</button>
      <button onClick={addFilter}>Добавить фильтр</button>
    </div>
  );
};

export default Menu;
