import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { cacheMiddleware } from "./utils/redux-cache";

import {
  pageName as searchPage,
  reducer as searchReducer
} from "./pages/SearchPage"; //search

const reducer = combineReducers({
  [searchPage]: searchReducer
});

const middlewares = [thunkMiddleware, cacheMiddleware];

if (process.env.NODE_ENV !== "production") {
  const reduxLogger = require("redux-logger").logger;
  middlewares.push(reduxLogger);
}

const storeEnhances = compose(applyMiddleware(...middlewares));

export default createStore(reducer, storeEnhances);
