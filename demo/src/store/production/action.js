import * as pro from "./action-type";
import API from "@/api/api";

//初始化获取商品数据，保存在redux中
export const getProData = () => {
  return async dispatch => {
    try {
      let result = await API.getProduction();
      result.map(item => {
        item.selectStatues = true;
        item.selectNum = 0;
        return item;
      });
      dispatch({
        type: pro.GETPRODUCTION,
        dataList: result
      });
    } catch (err) {
      console.error(err);
    }
  };
};

//选择商品
export const togSelectPro = index => {
  return {
    type: pro.TOGGLESELECT,
    index
  };
};

//编辑商品
export const editPro = (index, selectNum) => {
  return {
    type: pro.EDITPRODUCTION,
    index,
    selectNum
  };
};

//清空选择
export const clearSelected = () => {
  return {
    type: pro.CLEARSELECTED
  };
};
