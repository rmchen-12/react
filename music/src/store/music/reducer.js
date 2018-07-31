import * as all from "./actionTypes";

const initState = {
  audio: {
    songUrl: "",
    imgUrl: "http://m.kugou.com/v3/static/images/index/logo_kugou.png",
    title: "",
    singer: "",
    currentLength: 0,
    songLength: 0,
    lyrics: "",
    currentFlag: false
  },
  audioLoading: false,
  listenCount: 0,
  player: {
    detailPlayerFlag: false,
    isPlay: false
  },
  listInfo: {
    songList: [],
    songIndex: 0
  },
  keyword: ""
};

export const music = (state = initState, action = {}) => {
  switch (action.type) {
    case all.SET_LIST:
      return { ...state, ...action.data };
    case all.PLAY_SONG:
      return { ...state, ...action.data };
    case all.PLAY_STATE:
      return { ...state, ...action.data };
    case all.PLAY_LOADING:
      return { ...state, ...action.data };
    case all.SEARCH_KEYWORDS:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
