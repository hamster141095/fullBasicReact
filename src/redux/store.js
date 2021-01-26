import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = composeEnchancers(applyMiddleware(promiseMiddleware))(
  createStore
);

export default store;
