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
    //执行reducer
    dispatch({
      type: ACTION_TYPES.START,
      isLoading: true,
      ...startProps
    });

    //判断URL有没有缓存，有的话就读取缓存，没有的话拉取数据
    if (isCached(URL)) {
      dispatch({
        type: ACTION_TYPES.SUCCESS,
        isLoading: false,
        payLoad: getCache(URL),
        ...startProps
      });
    } else {
      fetch(URL, { ...fetchParams })
        .then(response => {
          if (response.status !== 200) {
            throw new Error(
              "Fail to get response with status:" + response.status
            );
          }
          response
            .json()
            .then(responseData => {
              let action = {
                type: ACTION_TYPES.SUCCESS,
                isLoading: false,
                payload: responseData,
                ...successProps
              }; //数据存储到action对象里

              if (doesCache) {
                action = {
                  ...action,
                  cacheKey: URL,
                  cacheValue: responseData
                }; //如果有需要缓存标记的话进行缓存
              }
              dispatch(action);
            })
            .catch(error => {
              throw new Error("Invalid json response:" + error);
            });
        })
        .catch(error => {
          dispatch({
            type: ACTION_TYPES.ERROR,
            isLoading: false,
            error: error,
            ...errorProps
          });
        });
    }
  };
}

export default actionCreator;
