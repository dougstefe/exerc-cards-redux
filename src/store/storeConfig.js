import { createStore, combineReducers } from "redux"
import numberReducers from "./reducers/numberReducers"

const reducers = combineReducers({
    numbers: numberReducers
});

export default function storeConfig(){
    return createStore(reducers)
}