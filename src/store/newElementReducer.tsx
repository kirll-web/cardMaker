import {
  TextBlockProps,
  ImageBlockProps,
  RectangleProps,
  CircleProps,
  FilterProps,
} from "../components/models/models";

const newElementReducer = (
  state:
    | TextBlockProps
    | ImageBlockProps
    | RectangleProps
    | CircleProps
    | FilterProps
    | null = null,
  action
) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      return { ...action.element };
    case "UPDATE_ELEMENT":
      return { ...state, [`${action.key}`]: action.value };
    case "DELETE_ELEMENT":
      return null;
    default:
      return state;
  }
};

export default newElementReducer;
