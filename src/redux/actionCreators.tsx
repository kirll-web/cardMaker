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

function updateNewElementAction(key: string, value: string | number | boolean) {
  return {
    type: Actions.UPDATE_NEW_ELEMENT,
    payload: {
      key,
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
  updateNewElementAction,
  updateElementsPageAction,
  showMenuTextAction,
};
