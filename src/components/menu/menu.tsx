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
      xPos: 100,
      yPos: 100,
      fontSize: 20,
      fontFamily: `Roboto`,
      color: `#000000`,
      bold: false,
      value: ["Добавить текст"],
    };
    addElement(elem);
  };

  return (
    <div className="menu">
      <button onClick={addTextBlock}>Добавить текст</button>
      <button>Добавить круг</button>
      <button>Добавить квадрат</button>
      <button>Добавить картинку</button>
    </div>
  );
};

export default Menu;
