import "whatwg-fetch";
import {
  GET_GITHUB_FAIL,
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  CHANGE_USER_ID
} from "../constants/actionTypes";

import { showSpinner, hideSpinner } from "./uiActions";

//定义要发生的事，具体行为放到reducer里执行
export const getGithub = (userId = "torvalds") => {
  return dispatch => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());
    fetch("https://api.github.com/users/" + userId)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
        dispatch(hideSpinner());
      })
      .catch(function(response) {
        dispatch({ type: GET_GITHUB_FAIL });
      });
  };
};

export const changeUserId = text => ({
  type: CHANGE_USER_ID,
  payload: { userId: text }
});
