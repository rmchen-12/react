const caches = {};

const hasCachedKey = cacheKey => {
  return Object.keys(caches).indexOf(cacheKey) >= 0;
};

const cacheMiddleware = store => next => action => {
  //如果action里没有设置这两个属性，那就跳过
  if (
    typeof action.cacheKey === "undefined" ||
    typeof action.cacheValue === "undefined"
  ) {
    next(action);
    return;
  }

  //如果action设置了属性，并且缓存里还没有该action缓存，那就存起来
  if (!hasCachedKey(action.cacheKey)) {
    caches[action.cacheKey] = action.cacheValue;
  }
  next(action);
};

const getCache = cacheKey => {
  if (hasCachedKey) {
    return caches[cacheKey];
  }
};

const isCached = (cacheKey, cacheDetector = hasCachedKey) => {
  return hasCachedKey(cacheKey);
};

export { cacheMiddleware, isCached, getCache };
