//типы
type Chars = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
};

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

type TextBlock = Block & {
  type: "text";
  chars: Array<Chars>;
};

type GraphicObject = Block & {
  type: "graphic";
  backgroundImage: string;
  backgroundColor: string;
};

type ImageBlock = Block & {
  type: "image";
  data: string;
};

type Circle = GraphicObject & {
  borderRadius: number;
};

type Rectangle = GraphicObject;

type Triangle = GraphicObject;

type Filter = {
  name: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<Filter>;

type SelectionArea = {
  xPos: number;
  yPos: number;
  width: number;
  height: number;
};

type HistoryCommands = Block & {
  history: Array<string>;
};

type Template = {
  id: string;
  name: string;
  blocks: Array<
    | TextBlock
    | ImageBlock
    | Filter
    | Triangle
    | Circle
    | Rectangle
    | SelectionArea
  >;
};

type TemplatesCollection = {
  templates: Array<Template>;
};

type Popup = Block & {
  name: string;
  message: string;
};

type Page = Array<
  | TextBlock
  | ImageBlock
  | Filter
  | Triangle
  | Circle
  | Rectangle
  | SelectionArea
  | FilterCollection
>;

type Doc = Array<
  Popup | Page | TemplatesCollection | HistoryCommands | FilterCollection
>;

const textBlock: TextBlock = {
  id: "id1",
  width: 200,
  height: 100,
  xPos: 0,
  yPos: 0,
  type: "text",
  chars: [
    {
      value: "h",
      fontSize: 12,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
    },
  ],
};

const imageBlock: ImageBlock = {
  id: "id2",
  type: "image",
  data: "https//",
  width: 300,
  height: 300,
  xPos: 50,
  yPos: 50,
};

const circle: Circle = {
  id: "id3",
  width: 300,
  height: 300,
  xPos: 70,
  yPos: 70,
  borderRadius: 50,
  backgroundImage: "",
  backgroundColor: "#add333",
};

const rectangle: Rectangle = {
  id: "id3",
  type: "graphic",
  width: 300,
  height: 300,
  xPos: 70,
  yPos: 70,
  backgroundImage: "https://",
  backgroundColor: "",
};

const triangle: Rectangle = {
  id: "id3",
  width: 300,
  height: 300,
  xPos: 70,
  yPos: 70,
  backgroundImage: "https://",
  backgroundColor: "",
};

const historyCommands: HistoryCommands = {
  history: ["id1", "id2", "id3"],
};

const selectionArea = {
  xPos: 0,
  yPos: 0,
  width: 0,
  height: 0,
};

const greenFilter: Filter = {
  name: "greenFilter",
  colorOfFilter: "#00ff00",
  opacity: 50,
};

const blueFilter: Filter = {
  name: "blueFilter",
  colorOfFilter: "#0000ff",
  opacity: 50,
};

const redFilter: Filter = {
  name: "redFilter",
  colorOfFilter: "#f91800",
  opacity: 50,
};

const grayFilter: Filter = {
  name: "grayFilter",
  colorOfFilter: "#f91800",
  opacity: 50,
};

const filterCollection: FilterCollection = [
  greenFilter,
  blueFilter,
  redFilter,
  grayFilter,
];

const page: Page = [
  textBlock,
  imageBlock,
  triangle,
  circle,
  rectangle,
  selectionArea,
  filterCollection,
];

const templateWow: Template = {
  id: "id6",
  name: "wow",
  blocks: [circle, circle, textBlock],
};

const templateCollection: TemplatesCollection = {
  templates: [templateWow],
};

const doc: Doc = [page, templateCollection, historyCommands];
