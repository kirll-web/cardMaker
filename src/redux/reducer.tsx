import { Action, Actions } from "./actions";
import {
  TextBlockProps,
  ImageBlockProps,
  RectangleProps,
  CircleProps,
  FilterProps,
} from "../components/models/models";
import { combineReducers } from "redux";
import { doc } from "../components/models/data";
import createHistory from "../components/models/history";

const initData: Array<
  TextBlockProps | ImageBlockProps | RectangleProps | CircleProps | FilterProps
> = doc.page.elements;

const elementsPageReducer = (
  state: Array<
    | TextBlockProps
    | ImageBlockProps
    | RectangleProps
    | CircleProps
    | FilterProps
  > = initData,
  action: Action
) => {
  switch (action.type) {
    case Actions.ADD_ELEMENT_PAGE: {
      switch (action.payload.element.type) {
        case "rectangle": {
          history.addHistoryItem([
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 5,
              yPos: action.payload.element.yPos + 5,
            },
          ]);
          return [
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 5,
              yPos: action.payload.element.yPos + 5,
            },
          ];
        }
        case "filter": {
          history.addHistoryItem([
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 5,
              yPos: action.payload.element.yPos + 5,
            },
          ]);
          return [
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 5,
              yPos: action.payload.element.yPos + 5,
            },
          ];
        }
        case "image": {
          history.addHistoryItem([
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 5,
              yPos: action.payload.element.yPos + 5,
            },
          ]);
          return [
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 5,
              yPos: action.payload.element.yPos + 5,
            },
          ];
        }
        case "circle": {
          history.addHistoryItem([
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 1,
              yPos: action.payload.element.yPos + 1,
            },
          ]);
          return [
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos + 1,
              yPos: action.payload.element.yPos + 1,
            },
          ];
        }
        case "text": {
          history.addHistoryItem([
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos,
              yPos: action.payload.element.yPos + 2,
            },
          ]);
          return [
            ...state,
            {
              ...action.payload.element,
              xPos: action.payload.element.xPos,
              yPos: action.payload.element.yPos + 2,
            },
          ];
        }
        default: {
          history.addHistoryItem([...state]);
          return [...state];
        }
      }
    }
    case Actions.LOAD_ELEMENTS_PAGE: {
      history.addHistoryItem([...action.payload.elements]);
      return [...action.payload.elements];
    }
    case Actions.CLEAR_PAGE: {
      history.addHistoryItem([]);
      return [];
    }
    case Actions.UNDO:
      const prevState = history.undo();
      if (prevState) {
        return prevState;
      }
      return state;
    case Actions.REDO:
      const nextState = history.redo();
      if (nextState) {
        return nextState;
      }
      return state;
    default:
      return state;
  }
};

const newElementReducer = (
  state:
    | TextBlockProps
    | ImageBlockProps
    | RectangleProps
    | CircleProps
    | FilterProps
    | null = null,
  action: Action
) => {
  switch (action.type) {
    case Actions.ADD_NEW_ELEMENT: {
      return { ...action.payload.element };
    }
    case Actions.DELETE_NEW_ELEMENT: {
      return null;
    }
    case Actions.UPDATE_FONT_FAMILY: {
      return { ...state, fontFamily: action.payload.value };
    }
    case Actions.UPDATE_X_POS: {
      return { ...state, xPos: action.payload.value };
    }
    case Actions.UPDATE_Y_POS: {
      return { ...state, yPos: action.payload.value };
    }
    case Actions.UPDATE_WIDTH: {
      return { ...state, width: action.payload.value };
    }
    case Actions.UPDATE_HEIGHT: {
      return { ...state, height: action.payload.value };
    }
    case Actions.UPDATE_COLOR: {
      return { ...state, backgroundColor: action.payload.value };
    }
    case Actions.UPDATE_VALUE_TEXT: {
      return { ...state, value: action.payload.value };
    }
    case Actions.UPDATE_FONT_SIZE: {
      return { ...state, fontSize: action.payload.value };
    }
    case Actions.UPDATE_BOLD: {
      return { ...state, bold: action.payload.value };
    }
    case Actions.UPDATE_UNDERLINE: {
      return { ...state, underline: action.payload.value };
    }
    case Actions.UPDATE_ITALIC: {
      return { ...state, italic: action.payload.value };
    }
    case Actions.UPDATE_OPACITY_FILTER: {
      return { ...state, opacity: action.payload.value };
    }

    default:
      return state;
  }
};

const menuTextReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case Actions.SHOW_MENUTEXT: {
      return action.payload.show;
    }
    default:
      return state;
  }
};

const menuGraphicObjectReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case Actions.SHOW_MENU_GRAPHIC_OBJECT: {
      return action.payload.show;
    }
    default:
      return state;
  }
};

const menuFilterReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case Actions.SHOW_MENU_FILTER: {
      return action.payload.show;
    }
    default:
      return state;
  }
};

const menuTemplatesReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case Actions.SHOW_MENU_TEMPLATES: {
      return action.payload.show;
    }
    default:
      return state;
  }
};

const colorsReducer = (state: Array<string> = doc.colors, action: Action) => {
  switch (action.type) {
    case Actions.ADD_NEW_COLOR: {
      return [...state, action.payload.value];
    }
    default:
      return state;
  }
};

const defaultStateMenuSaveImage = {
  show: false,
  format: "png",
};

const menuSaveImageReducer = (
  state = defaultStateMenuSaveImage,
  action: Action
) => {
  switch (action.type) {
    case Actions.SHOW_MENU_SAVE_IMAGE: {
      return { ...state, show: action.payload.show };
    }
    case Actions.CHANGE_FORMAT_SAVE_IMAGE: {
      return { ...state, format: action.payload.format };
    }
    default:
      return state;
  }
};

const history =
  createHistory<
    Array<
      | TextBlockProps
      | ImageBlockProps
      | RectangleProps
      | CircleProps
      | FilterProps
    >
  >(initData); // Создаем историю команд

const rootReducer = combineReducers({
  elementsPage: elementsPageReducer,
  newElement: newElementReducer,
  menuText: menuTextReducer,
  menuGraphicObject: menuGraphicObjectReducer,
  menuFilter: menuFilterReducer,
  menuSaveImage: menuSaveImageReducer,
  menuTemplates: menuTemplatesReducer,
  colors: colorsReducer,
});

export { rootReducer };
