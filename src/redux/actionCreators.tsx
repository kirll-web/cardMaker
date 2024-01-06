import { Actions } from "./actions";
import {
  TextBlockProps,
  ImageBlockProps,
  RectangleProps,
  CircleProps,
  FilterProps,
} from "../components/models/models";

function addNewElementAction(
  element:
    | TextBlockProps
    | ImageBlockProps
    | RectangleProps
    | CircleProps
    | FilterProps
) {
  return {
    type: Actions.ADD_NEW_ELEMENT,
    payload: {
      element,
    },
  };
}
function deleteNewElementAction() {
  return {
    type: Actions.DELETE_NEW_ELEMENT,
    payload: null,
  };
}

function updateFontFamilyNewElementAction(value: string) {
  return {
    type: Actions.UPDATE_FONT_FAMILY,
    payload: {
      value,
    },
  };
}

function updateXPosNewElementAction(value: number) {
  return {
    type: Actions.UPDATE_X_POS,
    payload: {
      value,
    },
  };
}

function updateYPosNewElementAction(value: number) {
  return {
    type: Actions.UPDATE_Y_POS,
    payload: {
      value,
    },
  };
}

function updateWidthNewElementAction(value: number) {
  return {
    type: Actions.UPDATE_WIDTH,
    payload: {
      value,
    },
  };
}

function updateHeightNewElementAction(value: number) {
  return {
    type: Actions.UPDATE_HEIGHT,
    payload: {
      value,
    },
  };
}

function updateColorTextNewElementAction(value: string) {
  return {
    type: Actions.UPDATE_COLOR,
    payload: {
      value,
    },
  };
}

function updateValueTextNewElementAction(value: string) {
  return {
    type: Actions.UPDATE_VALUE_TEXT,
    payload: {
      value,
    },
  };
}

function updateFontSizeTextNewElementAction(value: number) {
  return {
    type: Actions.UPDATE_FONT_SIZE,
    payload: {
      value,
    },
  };
}

function updateBoldTextNewElementAction(value: boolean) {
  return {
    type: Actions.UPDATE_BOLD,
    payload: {
      value,
    },
  };
}

function updateUnderlineTextNewElementAction(value: boolean) {
  return {
    type: Actions.UPDATE_UNDERLINE,
    payload: {
      value,
    },
  };
}

function updateItalicTextNewElementAction(value: boolean) {
  return {
    type: Actions.UPDATE_ITALIC,
    payload: {
      value,
    },
  };
}

function updateImageSrcNewElementAction(value: string) {
  return {
    type: Actions.UPDATE_SRC_IMAGE,
    payload: {
      value,
    },
  };
}

function updateOpacityFilterNewElementAction(value: number) {
  return {
    type: Actions.UPDATE_OPACITY_FILTER,
    payload: {
      value,
    },
  };
}

function addElementToPageAction(
  element:
    | TextBlockProps
    | ImageBlockProps
    | RectangleProps
    | CircleProps
    | FilterProps
) {
  return {
    type: Actions.ADD_ELEMENT_PAGE,
    payload: {
      element,
    },
  };
}

function loadElementsToPageAction(
  elements: Array<
    | TextBlockProps
    | ImageBlockProps
    | RectangleProps
    | CircleProps
    | FilterProps
  >
) {
  return {
    type: Actions.LOAD_ELEMENTS_PAGE,
    payload: {
      elements,
    },
  };
}

function showMenuTextAction(show: boolean) {
  return {
    type: Actions.SHOW_MENUTEXT,
    payload: {
      show,
    },
  };
}

function showMenuGraphicObjectAction(show: boolean) {
  return {
    type: Actions.SHOW_MENU_GRAPHIC_OBJECT,
    payload: {
      show,
    },
  };
}

function showMenuFilter(show: boolean) {
  return {
    type: Actions.SHOW_MENU_FILTER,
    payload: {
      show,
    },
  };
}

function showMenuImage(show: boolean) {
  return {
    type: Actions.SHOW_MENU_IMAGE,
    payload: {
      show,
    },
  };
}

function createUndoAction() {
  return {
    type: Actions.UNDO,
  };
}

function createRedoAction() {
  return {
    type: Actions.REDO,
  };
}

export {
  addNewElementAction,
  deleteNewElementAction,
  updateBoldTextNewElementAction,
  updateFontFamilyNewElementAction,
  updateHeightNewElementAction,
  updateUnderlineTextNewElementAction,
  updateWidthNewElementAction,
  updateFontSizeTextNewElementAction,
  updateValueTextNewElementAction,
  updateColorTextNewElementAction,
  updateXPosNewElementAction,
  updateYPosNewElementAction,
  updateItalicTextNewElementAction,
  addElementToPageAction,
  showMenuTextAction,
  loadElementsToPageAction,
  showMenuGraphicObjectAction,
  showMenuFilter,
  showMenuImage,
  updateImageSrcNewElementAction,
  createRedoAction,
  createUndoAction,
  updateOpacityFilterNewElementAction,
};
