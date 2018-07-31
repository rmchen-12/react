import * as all from "./actionTypes";

export const setList = data => ({ type: all.SET_LIST, data });

export const playSong = data => ({ type: all.PLAY_SONG, data });

export const playState = data => ({ type: all.PLAY_STATE, data });

export const loading = data => ({ type: all.PLAY_LOADING, data });

export const searchKeywords = data => ({ type: all.SEARCH_KEYWORDS, data });
