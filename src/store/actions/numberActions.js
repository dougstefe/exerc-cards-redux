import { MINIMUM_NUMBER_CHANGED, MAXIMUM_NUMBER_CHANGED } from "./types";

export function changeMinimum(newNumber){
    return {
        type: MINIMUM_NUMBER_CHANGED,
        payload: newNumber
    }
}

export function changeMaximum(newNumber){
    return {
        type: MAXIMUM_NUMBER_CHANGED,
        payload: newNumber
    }
}