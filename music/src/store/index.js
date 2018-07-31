import { applyMiddleware, createStore, combineReducers } from "redux";
import * as music from "./music/reducer";
import * as ui from "./ui/reducer";
const reduxLogger = require("redux-logger").logger;

export default createStore(
  combineReducers({ ...music, ...ui }),
  applyMiddleware(reduxLogger)
);
