import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    users: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store