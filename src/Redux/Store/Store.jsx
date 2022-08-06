import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware
  } from "redux";
import { loginReducer } from "../Login/Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: loginReducer,

  });
  
const store = createStore(loginReducer,applyMiddleware(thunk));

export { store }