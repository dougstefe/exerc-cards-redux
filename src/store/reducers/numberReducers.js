import { MINIMUM_NUMBER_CHANGED, MAXIMUM_NUMBER_CHANGED } from "../actions/types";
 

const initialState = {
    minimum: 1,
    maximum: 100
}

export default function numberReducers(state = initialState, action){
    switch(action.type){
        case MINIMUM_NUMBER_CHANGED:
            return {
                ...state,
                minimum: action.payload
            }
        case MAXIMUM_NUMBER_CHANGED:
            return {
                ...state,
                maximum: action.payload
            }
        default:
            return state
    }
}