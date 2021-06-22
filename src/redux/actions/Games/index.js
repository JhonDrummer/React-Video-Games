import { ADD_GAME, REMOVE_GAME } from "../../types";

export const addGame = (game) => {
    return {
        type: ADD_GAME,
        payload: {game}
    };
};

export const removeGame = (id) => {
    return {
        type: REMOVE_GAME,
        id
    }
}