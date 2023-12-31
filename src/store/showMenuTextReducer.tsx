const showMenuTextReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_MENUTEXT":
      return action.show;
    default:
      return state;
  }
};

export default showMenuTextReducer;
