import React from "react";
import style from "./style.less";
import API from "../../../api";
import WrapperComponent from "../../../container";
import { List } from "antd-mobile";

const Item = List.Item;

class RankList extends React.Component {
  state = {
    info: "",
    list: [],
    pageSize: 30,
    page: 1,
    total: 0,
    height: document.documentElement.clientHeight,
    refreshing: false,
    scroller: false,
    enablescroll: true,
    load: ""
  };

  async componentDidMount() {
    const res = await API.getRankList({
      rankid: this.props.match.params.id,
      page: this.state.page
    });
    console.log(res);
    this.setState({
      list: res.songs.list
    });
  }

  render() {
    return (
      <div className={style.rankList}>
        <List>
          {this.state.list &&
            this.state.list.length > 0 &&
            this.state.list.map((v, i) => (
              <Item key={i}>
                <p>{i}</p>
              </Item>
            ))}
        </List>
      </div>
    );
  }
}

export default WrapperComponent(RankList);
