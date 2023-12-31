import {
  PageProps,
  Doc,
  FilterProps,
  TextBlockProps,
  RectangleProps,
  CircleProps,
  ImageBlockProps,
  SelectionAreaProps,
  HistoryCommands,
  FilterCollection,
  TemplateProps,
  TemplatesCollection,
  Colors,
  Fonts,
  DataMenuText,
  MenuText,
} from "./models";

const greenFilter: FilterProps = {
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

const blueFilter: FilterProps = {
  name: "blueFilter",
  colorOfFilter: "#009afc",
  type: "filter",
  id: "filter2",
  opacity: 0.5,
  width: 800,
  height: 600,
  xPos: 0,
  yPos: 0,
};

const redFilter: FilterProps = {
  name: "redFilter",
  colorOfFilter: "#fc0000",
  type: "filter",
  id: "filter3",
  opacity: 0.5,
  width: 800,
  height: 600,
  xPos: 0,
  yPos: 0,
};

const grayFilter: FilterProps = {
  name: "grayFilter",
  colorOfFilter: "#909090",
  type: "filter",
  id: "filter4",
  opacity: 0.5,
  width: 800,
  height: 600,
  xPos: 0,
  yPos: 0,
};

const filterCollection: FilterCollection = [
  greenFilter,
  blueFilter,
  redFilter,
  grayFilter,
];

const page1: PageProps = {
  // *минимальные данные
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [],
};

const page2: PageProps = {
  //*В коллекциях могут быть некоторые элементы (не все типы элементов могут быть).
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: "Привет, Мир",
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
      italic: false,
      underline: false,
    },
    {
      id: "text2",
      type: "text",
      value: "HelloWorld",
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
      italic: false,
      underline: false,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 300,
      yPos: 300,
      url: "../../../resource/1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    },
  ],
};

const page3: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: "Привет Мир",
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
      italic: false,
      underline: false,
    },
    {
      id: "text2",
      type: "text",
      value: "HelloWorld",
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
      italic: false,
      underline: false,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 300,
      yPos: 300,
      url: "../../../resource/1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 300,
      height: 300,
      xPos: 0,
      yPos: 300,
    },
    {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#6aa449",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 300,
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#67f216",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 0,
      yPos: 0,
    },
    greenFilter,
  ],
};

const template1: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: "С днём",
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
      italic: false,
      underline: false,
    },
    {
      id: "text2",
      type: "text",
      value: "ковыряния в носу!",
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 400,
      height: 100,
      xPos: 350,
      yPos: 490,
      italic: false,
      underline: false,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 250,
      yPos: 150,
      url: "../../../resource/1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    },
  ],
};

const template2: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: "С днём",
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
      italic: false,
      underline: false,
    },
    {
      id: "text2",
      type: "text",
      value: "зелёных цифр в СберИнвестиции!",
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
      italic: false,
      underline: false,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../resource/2.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    },
  ],
};

const template3: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    greenFilter,
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../resource/3.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    },
    {
      id: "text1",
      type: "text",
      value: "С днём",
      fontSize: 50,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
      italic: false,
      underline: false,
    },
    {
      id: "text2",
      type: "text",
      value: "красных цифр в СберИнвестиции...",
      fontSize: 100,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
      italic: false,
      underline: false,
    },

    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#da2b35",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 200,
      yPos: 200,
    },
    {
      id: "circle2",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 50,
      yPos: 50,
    },
    {
      id: "circle3",
      type: "circle",
      backgroundColor: "#fe00ff",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 600,
    },
  ],
};

const page4: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template1.blocks],
};

const page5: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template2.blocks],
};

const page6: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template3.blocks],
};

const templateCollection: TemplatesCollection = {
  templates: [template1, template2, template3],
};

const historyCommands: HistoryCommands = {
  indexOfHistory: 0,
  history: [page6],
};

const colors: Colors = [
  "#ac00ff",
  "#0000ff",
  "#00ff00",
  "#ff0000",
  "#ffffff",
  "#000000",
];

const fonts: Fonts = [
  "Roboto",
  "PlayfairDisplay",
  "RobotoSlab",
  "YanoneKaffeesatz",
];

const dataMenuText: DataMenuText = {
  colors: colors,
  fonts: fonts,
};

const defaultMenuText: TextBlockProps = {
  type: "text",
  id: "1",
  value: "Добавить текст",
  width: 200,
  height: 200,
  xPos: 400,
  yPos: 300,
  fontSize: 20,
  color: "#000000",
  fontFamily: "Roboto",
  bold: false,
  underline: false,
  italic: false,
};

const defaultСircle: CircleProps = {
  id: `circle${Math.floor(Math.random() * 101)}`,
  type: "circle",
  backgroundColor: "#000000",
  backgroundImage: "",
  width: 200,
  height: 200,
  xPos: 50,
  yPos: 50,
};

const defaultRectangle: RectangleProps = {
  id: `rectangle${Math.floor(Math.random() * 101)}`,
  type: "rectangle",
  backgroundColor: "#6aa449",
  backgroundImage: "",
  width: 200,
  height: 200,
  xPos: 600,
  yPos: 300,
};

const defaultImage: ImageBlockProps = {
  id: `img${Math.floor(Math.random() * 101)}`,
  type: "image",
  width: 200,
  height: 200,
  xPos: 300,
  yPos: 200,
  url: "../../../resource/3.png",
  allowedFormat: ["JPG", "JPEG", "PNG"],
  pic: null,
};

const defaultTextBlock: TextBlockProps = {
  id: `text${Math.floor(Math.random() * 101)}`,
  type: "text",
  value: "Добавить текст",
  fontSize: 30,
  fontFamily: "Roboto",
  color: "#000000",
  bold: true,
  xPos: 250,
  yPos: 490,
  italic: false,
  underline: false,
};

const defaultFilter: FilterProps = greenFilter;

const doc: Doc = {
  page: historyCommands.history[historyCommands.indexOfHistory],
  templateCollection,
  historyCommands,
  filterCollection,
  defaultMenuText,
  dataMenuText,
};

export {
  doc,
  defaultFilter,
  defaultImage,
  defaultСircle,
  defaultTextBlock,
  defaultRectangle,
};
