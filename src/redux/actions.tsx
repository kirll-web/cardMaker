import {
  TextBlockProps,
  ImageBlockProps,
  RectangleProps,
  CircleProps,
  FilterProps,
} from "../components/models/models";

enum Actions {
  ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT",
  UPDATE_NEW_ELEMENT = "UPDATE_NEW_ELEMENT",
  DELETE_NEW_ELEMENT = "DELETE_NEW_ELEMENT",
  UPDATE_ELEMENTS_PAGE = "UPDATE_ELEMENTS_PAGE",
  SHOW_MENUTEXT = "SHOW_MENUTEXT",
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

type updateNewElementAction = {
  type: Actions.UPDATE_NEW_ELEMENT;
  payload: {
    key: string;
    value: string | number | boolean;
  };
};

type updateElementsPageAction = {
  type: Actions.UPDATE_ELEMENTS_PAGE;
  payload: {
    element:
      | TextBlockProps
      | ImageBlockProps
      | RectangleProps
      | CircleProps
      | FilterProps;
  };
};

type showMenuTextAction = {
  type: Actions.SHOW_MENUTEXT;
  payload: {
    show: boolean;
  };
};

type Action =
  | addNewElementAction
  | deleteNewElementAction
  | updateNewElementAction
  | showMenuTextAction
  | updateElementsPageAction;

export { Actions, type Action };
