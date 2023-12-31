import { PageProps } from "../components/models/models";

import { doc } from "../components/models/data";

const defaultState: PageProps = {
  id: doc.page.id,
  width: doc.page.width,
  height: doc.page.height,
  yPos: doc.page.yPos,
  xPos: doc.page.xPos,
  elements: [...doc.page.elements],
};

const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_ELEMENTS":
      return { ...state, elements: [...state.elements, action.element] };
    default:
      return state;
  }
};

export default pageReducer;
