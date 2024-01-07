import {
  TextBlockProps,
  ImageBlockProps,
  RectangleProps,
  CircleProps,
  FilterProps,
} from "../components/models/models";

enum Actions {
  ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT",
  UPDATE_FONT_FAMILY = "UPDATE_FONT_FAMILY",
  UPDATE_FONT_SIZE = "UPDATE_FONT_SIZE",
  UPDATE_X_POS = "UPDATE_X_POS",
  UPDATE_Y_POS = "UPDATE_Y_POS",
  UPDATE_WIDTH = "UPDATE_WIDTH",
  UPDATE_HEIGHT = "UPDATE_HEIGHT",
  UPDATE_COLOR = "UPDATE_COLOR",
  UPDATE_BOLD = "UPDATE_BOLD",
  UPDATE_ITALIC = "UPDATE_ITALIC",
  UPDATE_UNDERLINE = "UPDATE_UNDERLINE",
  UPDATE_VALUE_TEXT = "UPDATE_VALUE_TEXT",
  DELETE_NEW_ELEMENT = "DELETE_NEW_ELEMENT",
  ADD_ELEMENT_PAGE = "ADD_ELEMENT_PAGE",
  SHOW_MENUTEXT = "SHOW_MENUTEXT",
  LOAD_ELEMENTS_PAGE = "LOAD_ELEMENTS_PAGE",
  SHOW_MENU_GRAPHIC_OBJECT = "SHOW_MENU_GRAPHIC_OBJECT",
  SHOW_MENU_FILTER = "SHOW_MENU_FILTER",
  SHOW_MENU_IMAGE = "SHOW_MENU_IMAGE",
  UPDATE_SRC_IMAGE = "UPDATE_SRC_IMAGE",
  UPDATE_OPACITY_FILTER = "UPDATE_OPACITY_FILTER",
  SHOW_MENU_SAVE_IMAGE = "SHOW_MENU_SAVE_IMAGE",
  CHANGE_FORMAT_SAVE_IMAGE = "CHANGE_FORMAT_SAVE_IMAGE",
  UNDO = "UNDO",
  REDO = "REDO",
}

type addNewElementAction = {
  type: Actions.ADD_NEW_ELEMENT;
  payload: {
    element:
      | TextBlockProps
      | ImageBlockProps
      | RectangleProps
      | CircleProps
      | FilterProps;
  };
};

type deleteNewElementAction = {
  type: Actions.DELETE_NEW_ELEMENT;
  payload: null;
};

type updateFontFamilyNewElementAction = {
  type: Actions.UPDATE_FONT_FAMILY;
  payload: {
    value: string;
  };
};

type updateOpacityFilterNewElementAction = {
  type: Actions.UPDATE_OPACITY_FILTER;
  payload: {
    value: number;
  };
};

type updateXPosNewElementAction = {
  type: Actions.UPDATE_X_POS;
  payload: {
    value: number;
  };
};

type updateYPosNewElementAction = {
  type: Actions.UPDATE_Y_POS;
  payload: {
    value: number;
  };
};

type updateWidthNewElementAction = {
  type: Actions.UPDATE_WIDTH;
  payload: {
    value: number;
  };
};

type updateHeightNewElementAction = {
  type: Actions.UPDATE_HEIGHT;
  payload: {
    value: number;
  };
};

type updateColorTextNewElementAction = {
  type: Actions.UPDATE_COLOR;
  payload: {
    value: string;
  };
};

type updateValueTextNewElementAction = {
  type: Actions.UPDATE_VALUE_TEXT;
  payload: {
    value: string;
  };
};

type updateFontSizeTextNewElementAction = {
  type: Actions.UPDATE_FONT_SIZE;
  payload: {
    value: number;
  };
};

type updateBoldTextNewElementAction = {
  type: Actions.UPDATE_BOLD;
  payload: {
    value: boolean;
  };
};

type updateUnderlineTextNewElementAction = {
  type: Actions.UPDATE_UNDERLINE;
  payload: {
    value: boolean;
  };
};

type updateItalicTextNewElementAction = {
  type: Actions.UPDATE_ITALIC;
  payload: {
    value: boolean;
  };
};

type updateImageSrcNewElementAction = {
  type: Actions.UPDATE_SRC_IMAGE;
  payload: {
    value: string;
  };
};

type addElementToPageAction = {
  type: Actions.ADD_ELEMENT_PAGE;
  payload: {
    element:
      | TextBlockProps
      | ImageBlockProps
      | RectangleProps
      | CircleProps
      | FilterProps;
  };
};

type loadElementsToPageAction = {
  type: Actions.LOAD_ELEMENTS_PAGE;
  payload: {
    elements: Array<
      | TextBlockProps
      | ImageBlockProps
      | RectangleProps
      | CircleProps
      | FilterProps
    >;
  };
};

type showMenuTextAction = {
  type: Actions.SHOW_MENUTEXT;
  payload: {
    show: boolean;
  };
};

type showMenuGraphicObject = {
  type: Actions.SHOW_MENU_GRAPHIC_OBJECT;
  payload: {
    show: boolean;
  };
};

type showMenuFilter = {
  type: Actions.SHOW_MENU_FILTER;
  payload: {
    show: boolean;
  };
};

type showMenuImage = {
  type: Actions.SHOW_MENU_IMAGE;
  payload: {
    show: boolean;
  };
};

type showMenuSaveImage = {
  type: Actions.SHOW_MENU_SAVE_IMAGE;
  payload: {
    show: boolean;
  };
};

type changeFormatSaveImage = {
  type: Actions.CHANGE_FORMAT_SAVE_IMAGE;
  payload: {
    format: string;
  };
};

type UndoAction = {
  type: Actions.UNDO;
};

type RedoAction = {
  type: Actions.REDO;
};

type Action =
  | addNewElementAction
  | deleteNewElementAction
  | updateFontFamilyNewElementAction
  | updateXPosNewElementAction
  | updateYPosNewElementAction
  | updateWidthNewElementAction
  | updateHeightNewElementAction
  | updateColorTextNewElementAction
  | updateValueTextNewElementAction
  | updateFontSizeTextNewElementAction
  | updateBoldTextNewElementAction
  | updateUnderlineTextNewElementAction
  | updateItalicTextNewElementAction
  | showMenuTextAction
  | addElementToPageAction
  | loadElementsToPageAction
  | showMenuGraphicObject
  | showMenuFilter
  | showMenuImage
  | updateImageSrcNewElementAction
  | UndoAction
  | RedoAction
  | updateOpacityFilterNewElementAction
  | showMenuSaveImage
  | changeFormatSaveImage;

export { Actions, type Action };
