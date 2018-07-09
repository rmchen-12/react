import actionTypeGenerator from "./actionTypeGenerator";
import { isCached, getCache } from "../redux-cache";

function actionCreator({
  pageName,
  moduleName,
  URL,
  fetchParams = {},
  doesCache = false,
  startProps = {},
  successProps = {},
  errorProps = {}
}) {
  const ACTION_TYPES = actionTypeGenerator(pageName, moduleName);
  return dispatch => {
    dispatch({
      type: ACTION_TYPES.START,
      isLoading: true,
      ...startProps
    });

    if (isCached(URL)) {
      dispatch({
        type: ACTION_TYPES.SUCCESS,
        isLoading: false,
        payLoad: getCache(URL),
        ...startProps
      });
    } else {
      fetch(URL, { ...fetchParams }).then(response => {
        if (response.status !== 200) {
          throw new Error(
            "Fail to get response with status:" + response.status
          );
        }
        response.json().then;
      });
    }
  };
}
