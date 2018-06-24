import { combineReducers } from "redux-immutable";
// import ui from "./ui/uiReducers"; // import routes from './routes';
import todoState from "./data/todoReducers"; // import routes from './routes';

const rootReducer = combineReducers({
  todoState
});

export default rootReducer;
