import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";

import moviesReducer from "./moviesReducer";

const reducers = combineReducers({
  moviesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware))
);

export default store;
