type Coordinates = {
  xPos: number;
  yPos: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Coordinates &
  Size & {
    id: string;
  };

type TextBlockProps = Block & {
  type: "text";
  value: Array<string>;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
};

type GraphicObject = Block & {
  backgroundImage: string;
  backgroundColor: string;
};

type ImageBlockProps = Block & {
  type: "image";
  url: string;
  allowedFormat: Array<string>;
};

type CircleProps = GraphicObject & {
  type: "circle";
};

type RectangleProps = GraphicObject & {
  type: "rectangle";
};
type FilterProps = {
  name: string;
  type: "filter";
  id: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<FilterProps>;

type SelectionAreaProps = Block;

type TemplateProps = {
  id: string;
  name: string;
  blocks: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
};

type TemplatesCollection = {
  templates: Array<TemplateProps>;
};

type PageProps = Block & {
  id: string;
  elements: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
};

type HistoryCommands = {
  indexOfHistory: number;
  history: Array<PageProps>;
};

type Doc = {
  page: PageProps;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  selectionArea: SelectionAreaProps;
};

const greenFilter: FilterProps = {
  colorOfFilter: "#3fc11c",
  name: "greenFilter",
  type: "filter",
  id: "filter1",
  opacity: 0.5,
};

const blueFilter: FilterProps = {
  name: "blueFilter",
  colorOfFilter: "#009afc",
  type: "filter",
  id: "filter2",
  opacity: 0.5,
};

const redFilter: FilterProps = {
  name: "redFilter",
  colorOfFilter: "#fc0000",
  type: "filter",
  id: "filter3",
  opacity: 0.5,
};

const grayFilter: FilterProps = {
  name: "grayFilter",
  colorOfFilter: "#909090",
  type: "filter",
  id: "filter4",
  opacity: 0.5,
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
      value: ["Привет", "Мир"],
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
    },
    {
      id: "text2",
      type: "text",
      value: ["HelloWorld"],
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
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
      value: ["Привет", "Мир"],
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
    },
    {
      id: "text2",
      type: "text",
      value: ["HelloWorld"],
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
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
      backgroundColor: "#909090",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 0,
    },
    greenFilter,
  ],
};

const selectionArea: SelectionAreaProps = {
  id: "idSelect",
  width: 0,
  height: 0,
  xPos: 0,
  yPos: 0,
};

const template1: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["С днём"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["ковыряния в носу!"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 400,
      height: 100,
      xPos: 350,
      yPos: 490,
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
      value: ["С днём"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["зелёных цифр в СберИнвестиции!"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
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
    },
  ],
};

const template3: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["С днём"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["красных цифр в СберИнвестиции..."],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../resource/3.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
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
  indexOfHistory: 4,
  history: [page1, page2, page3, page4, page5, page6],
};

const doc: Doc = {
  page: historyCommands.history[historyCommands.indexOfHistory],
  templateCollection,
  historyCommands,
  filterCollection,
  selectionArea,
};

export type {
  PageProps,
  Doc,
  FilterProps,
  TextBlockProps,
  RectangleProps,
  CircleProps,
  ImageBlockProps,
};

export { doc };
