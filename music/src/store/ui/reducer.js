import * as all from "./actionTypes";

const initState = {
  head: {
    toggle: false,
    title: "MUSIC",
    style: { background: "rgba(43,162,251,0)" },
    back: false
  },
  showSearch: false
};

export const ui = (state = initState, action = {}) => {
  switch (action.type) {
    case all.TOGGLE_SEARCH:
      return { ...state, ...action.data };
    case all.CHANGE_TITLE:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
