import { Action, Actions } from "./actions";
import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  RectangleProps,
  CircleProps,
  FilterProps,
} from "../components/models/models";
import { combineReducers } from "redux";
import { doc } from "../components/models/data";

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
    case Actions.UPDATE_ELEMENTS_PAGE: {
      return [...state, action.payload.element];
    }
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
    case Actions.UPDATE_NEW_ELEMENT: {
      return { ...state, [`${action.payload.key}`]: action.payload.value };
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

const rootReducer = combineReducers({
  elementsPage: elementsPageReducer,
  newElement: newElementReducer,
  menuText: menuTextReducer,
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
