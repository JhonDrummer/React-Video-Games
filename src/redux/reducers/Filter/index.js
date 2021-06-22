import { SET_FILTER } from "../../types";

const initialFilter = "SHOW_ALL";

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
