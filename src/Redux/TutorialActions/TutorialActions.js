import { ADD_TO_HISTORY } from "../ActionTypes/ActionTypes";

export const addToHistory = (tutorial) =>{
    return{
        type: ADD_TO_HISTORY,
        payload: tutorial,
    };
};