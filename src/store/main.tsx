import { createStore, combineReducers } from "redux";
import pageReducer from "./pageReducer";
import newElementReducer from "./newElementReducer";
import showMenuTextReducer from "./showMenuTextReducer";

const rootReducer = combineReducers({
  page: pageReducer,
  newElement: newElementReducer,
  showMenuText: showMenuTextReducer,
});

const store = createStore(rootReducer);

export default store;
