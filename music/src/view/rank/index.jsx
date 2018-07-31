import React from "react";
import style from "./style.less";
import { Link } from "react-router-dom";
import API from "../../api";
import { WingBlank, Icon } from "antd-mobile";
import WrapperContainer from "../../container";

class Rank extends React.Component {
  state = {
    rankList: []
  };

  async componentDidMount() {
    const res = await API.getRank();
    this.setState({
      rankList: res.rank.list
    });
  }

  changeTitle = () => {
    const head = { ...this.props.head };
    head.back = true;
    head.title = "排行榜";
    this.props.changeSongActions.changeTitle({
      head: head
    });
    console.log(head);
  };

  render() {
    const rankList =
      this.state.rankList &&
      this.state.rankList.length > 0 &&
      this.state.rankList.map((v, i) => (
        <Link
          key={i}
          to={`/ranklist/${v.rankid}`}
          onClick={this.changeTitle}
          className={style.rankItem}
        >
          <img
            src={v.imgurl.replace("{size}", "400")}
            className={style.img}
            alt="img"
          />
          <div className={style.rankname}>{v.rankname}</div>
          <div className={style.icon}>
            <Icon type="right" />
          </div>
        </Link>
      ));

    return (
      <div className={style.rank}>
        <div className={style.rankList}>
          <WingBlank>{rankList}</WingBlank>
        </div>
      </div>
    );
  }
}

export default WrapperContainer(Rank);
