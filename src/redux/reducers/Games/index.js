import { ADD_GAME, REMOVE_GAME } from "../../types";

const initialState = [];

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return [
        ...state,
        action.payload.game
      ];
    case REMOVE_GAME:
        return state.filter(q => q.id !== action.id);
    default:
      return state;
  }
};

export default gameReducer;
