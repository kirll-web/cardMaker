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

function updateElementsPageAction(
  element:
    | TextBlockProps
    | ImageBlockProps
    | RectangleProps
    | CircleProps
    | FilterProps
) {
  return {
    type: Actions.UPDATE_ELEMENTS_PAGE,
    payload: {
      element,
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
  updateElementsPageAction,
  showMenuTextAction,
};
