type Coordinates = {
  xPos: number;
  yPos: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Coordinates & Size;

type Info = {
  id: string;
};

type TextBlockProps = Coordinates &
  Info & {
    type: "text";
    value: string;
    fontSize: number;
    fontFamily: string;
    backgroundColor: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
  };

type GraphicObject = Block &
  Info & {
    backgroundImage: string;
    backgroundColor: string;
  };

type ImageBlockProps = Block &
  Info & {
    type: "image";
    url: string;
    pic: HTMLImageElement | null;
  };

type CircleProps = GraphicObject & {
  type: "circle";
};

type RectangleProps = GraphicObject & {
  type: "rectangle";
};
type FilterProps = Block & {
  name: string;
  type: "filter";
  id: string;
  backgroundColor: string;
  opacity: number;
};

type FilterCollection = Array<FilterProps>;

type SelectionAreaProps = Block & {
  type: "selectionArea";
};

type TemplateProps = {
  id: string;
  name: string;
  elements: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
  urlPic: string;
};

type AllowedFormatImage = Array<string>;

type TemplatesCollection = Array<TemplateProps>;

interface PageProps extends Block {
  id: string;
  elements: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
}

type HistoryCommands = {
  indexOfHistory: number;
  history: Array<PageProps>;
};
type Colors = Array<string>;

type Fonts = Array<string>;

type DataMenuText = {
  colors: Colors;
  fonts: Fonts;
};

type MenuText = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

type Doc = {
  page: PageProps;
  templateCollection: TemplatesCollection;
  filterCollection: FilterCollection;
  dataMenuText: DataMenuText;
  defaultMenuText: TextBlockProps;
  colors: Colors;
  allowedFormatImage: AllowedFormatImage;
};

export type {
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
  Coordinates,
  Colors,
  Fonts,
  MenuText,
  DataMenuText,
  AllowedFormatImage,
};
