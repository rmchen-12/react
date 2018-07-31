import React from "react";
import style from "./style.less";
import API from "../../api";
import { Icon, WingBlank } from "antd-mobile";
import { Link } from "react-router-dom";

class Hot extends React.Component {
  state = {
    hotList: []
  };

  async componentDidMount() {
    const res = await API.getHotList();
    this.setState({
      hotList: res.plist.list.info
    });
  }

  render() {
    console.log(this.state.hotList);
    const hotList =
      this.state.hotList &&
      this.state.hotList.length > 0 &&
      this.state.hotList.map((v, i) => (
        <Link to={"/hotlist/" + v.specialid} className={style.hotItem} key={i}>
          <div className={style.img}>
            <img src={v.imgurl.replace("{size}", "400")} alt="" />
          </div>
          <div className={style.info}>
            <div className={style.name}> {v.specialname} </div>
            <div className={style.num}>热度：{v.playcount}</div>
          </div>
          <div className={style.icon}>
            <Icon type="right" />
          </div>
        </Link>
      ));

    return (
      <div className={style.hotList}>
        <WingBlank>{hotList}</WingBlank>
      </div>
    );
  }
}

export default Hot;
