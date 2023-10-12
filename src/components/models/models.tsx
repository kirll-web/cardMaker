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

type FilterProps = Block & {
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
    | FilterProps
    | TemplateProps
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

export type {
  PageProps,
  Doc,
  FilterProps,
  TextBlockProps,
  RectangleProps,
  CircleProps,
  ImageBlockProps,
};
