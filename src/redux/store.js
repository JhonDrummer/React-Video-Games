import { createStore, combineReducers } from "redux";
import filterReducer from "./reducers/Filter";
import gameReducer from "./reducers/Games";

export const store = createStore(
  combineReducers({
    // todos will be updated by the todos reducer function (and the same for the visiblity filter)
    // always name reducers after the things they update for clarity
    todos: gameReducer,
    filterReducer: filterReducer
  })
);
