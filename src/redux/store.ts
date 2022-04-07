import { combineReducers, createStore } from "redux";
import loginReducer from "./login-reducer";

const reducer = combineReducers({
    form: loginReducer
})

const store = createStore(reducer)