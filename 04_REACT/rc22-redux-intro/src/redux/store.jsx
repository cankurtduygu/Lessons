import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";


const topluReducer = combineReducers({

    counterReducer : counterReducer,
    todoReducer : todoReducer

})



export const store = legacy_createStore(topluReducer);
