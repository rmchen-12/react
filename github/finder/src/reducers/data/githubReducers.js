import { handleActions } from "redux-actions";
import { GithubState } from "../../constants/models";

import {
  GET_GITHUB_FAIL,
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  CHANGE_USER_ID
} from "../../constants/actionTypes";

const githubReducers = handleActions(
  {
    GET_GITHUB_SUCCESS: (state, { payload }) =>
      state.merge({
        data: payload.data
      }),
    CHANGE_USER_ID: (state, { payload }) =>
      state.merge({
        userId: payload.userId
      })
  },
  GithubState
);

export default githubReducers;
