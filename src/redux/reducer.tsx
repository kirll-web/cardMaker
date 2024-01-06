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
      history.addHistoryItem([...state, action.payload.element]);
      return [...state, action.payload.element];
    }
    case Actions.LOAD_ELEMENTS_PAGE: {
      history.addHistoryItem([...action.payload.elements]);
      return [...action.payload.elements];
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
    case Actions.UPDATE_SRC_IMAGE: {
      return { ...state, url: action.payload.value };
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

const menuImageReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case Actions.SHOW_MENU_IMAGE: {
      return action.payload.show;
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
  menuImage: menuImageReducer,
});

export { rootReducer };

// const notesReducer = (state: Note[] = initData, action: Action) => {
// 	switch (action.type) {
// 	case NotesActions.CHANGE_TITLE: {
// 		const newState = state.map(note => {
// 			if (note.id === action.payload.noteId) {
// 				return {
// 					...note,
// 					title: action.payload.newTitle,
// 				}
// 			}
// 			return note
// 		})

// 		history.addHistoryItem(newState)
// 		return newState
// 	}
// 	case NotesActions.CHANGE_TEXT: {
// 		const newState = state.map(note => {
// 			if (note.id === action.payload.noteId) {
// 				return {
// 					...note,
// 					text: action.payload.newText,
// 				}
// 			}
// 			return note
// 		})
// 		history.addHistoryItem(newState)
// 		return newState
// 	}
// 	case NotesActions.CHANGE_BACKGROUND: {
// 		const newState = state.map(note => {
// 			if (note.id === action.payload.noteId) {
// 				return {
// 					...note,
// 					background: action.payload.newBackground,
// 				}
// 			}
// 			return note
// 		})
// 		history.addHistoryItem(newState)
// 		return newState
// 	}
// 	case NotesActions.CHANGE_ORDER:
// 		const newNotes = [...state]
// 		const removed = newNotes.splice(action.payload.from, 1)
// 		newNotes.splice(action.payload.to, 0, removed[0])

// 		history.addHistoryItem(newNotes)
// 		return newNotes
// 	case NotesActions.ADD_NOTE: {
// 		const newState = [
// 			...state,
// 			action.payload
// 		]

// 		history.addHistoryItem(newState)
// 		return newState
// 	}
// 	case NotesActions.DELETE_NOTE: {
// 		const newState = state.filter(item => item.id !== action.payload.noteId)

// 		history.addHistoryItem(newState)
// 		return newState
// 	}
// 	case NotesActions.UNDO:
// 		const prevState = history.undo()
// 		if (prevState) {
// 			return prevState
// 		}
// 		return state
// 	case NotesActions.REDO:
// 		const nextState = history.redo()
// 		if (nextState) {
// 			return nextState
// 		}
// 		return state
// 	default:
// 		return state
// 	}
// }

// const rootReducer = combineReducers({
// 	notes: notesReducer,
// })

// export {
// 	rootReducer,
// }
