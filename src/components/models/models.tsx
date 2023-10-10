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

type ImageBlock = Block & {
  type: "image";
  data: string;
  allowedFormat: Array<string>;
};

type Circle = GraphicObject & {
  type: "circle";
  borderRadius: number;
};

type Rectangle = GraphicObject & {
  type: "tectangle";
};

type Triangle = GraphicObject & {
  type: "triangle";
};

type Filter = Block & {
  id: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<Filter>;

type SelectionArea = Block;

type Template = {
  id: string;
  name: string;
  blocks: Array<
    TextBlock | ImageBlock | Filter | Triangle | Circle | Rectangle
  >;
};

type TemplatesCollection = {
  templates: Array<Template>;
};

type Page = Block & {
  id: string;
  elements: Array<
    | TextBlock
    | ImageBlock
    | Filter
    | Triangle
    | Circle
    | Rectangle
    | Filter
    | Template
  >;
};

type HistoryCommands = {
  indexOfHistory: number;
  history: Array<Page>;
};

type Doc = {
  page: Page;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  selectionArea: SelectionArea;
};

export type { Page, Doc, Filter, TextBlock };
