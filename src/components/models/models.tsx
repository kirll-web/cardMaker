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
  type: string;
  value: Array<string>;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
};

type GraphicObject = Block & {
  type: string;
  backgroundImage: string;
  backgroundColor: string;
};

type ImageBlockProps = Block & {
  type: string;
  url: string;
  allowedFormat: Array<string>;
};

type CircleProps = GraphicObject & {
  borderRadius: number;
};

type RectangleProps = GraphicObject;

type FilterProps = {
  name: string;
  type: string;
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
  colorOfFilter: "#00ff00",
  name: "greenFilter",
  type: "filter",
  id: "filter1",
  opacity: 50,
};

const blueFilter: FilterProps = {
  name: "blueFilter",
  colorOfFilter: "#0000ff",
  type: "filter",
  id: "filter2",
  opacity: 50,
};

const redFilter: FilterProps = {
  name: "redFilter",
  colorOfFilter: "#f91800",
  type: "filter",
  id: "filter3",
  opacity: 50,
};

const grayFilter: FilterProps = {
  name: "grayFilter",
  colorOfFilter: "#f91800",
  type: "filter",
  id: "filter4",
  opacity: 50,
};

const filterCollection: FilterCollection = [
  greenFilter,
  blueFilter,
  redFilter,
  grayFilter,
];

const page: PageProps = {
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [],
};

const selectionArea: SelectionAreaProps = {
  id: "idSelect",
  width: 0,
  height: 0,
  xPos: 0,
  yPos: 0,
};

const templateCollection: TemplatesCollection = {
  templates: [],
};

const historyCommands: HistoryCommands = {
  indexOfHistory: 0,
  history: [],
};

const doc: Doc = {
  page,
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
