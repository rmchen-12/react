import React from "react";
import style from "./style.less";
import API from "../../api";
import { Carousel, List } from "antd-mobile";
import BScroll from "better-scroll";
import WrappedComponent from "../../container";

const Item = List.Item;

class Home extends React.Component {
  state = {
    bannerList: [],
    songList: [],
    imgHeight: 176,
    scroller: null
  };

  async componentDidMount() {
    const res = await API.getHome();
    this.setState({
      bannerList: res.banner,
      songList: res.data
    });
  }

  componentDidUpdate() {
    if (this.state.scroller) {
      this.state.scroller.refresh();
    } else {
      this.state.scroller = new BScroll(this.homeWrapper, {
        click: true,
        scrollbar: true
      });
    }
  }

  render() {
    return (
      <div className={style.home} ref={e => (this.homeWrapper = e)}>
        <div className={style.homeContent}>
          <Carousel autoplay infinite>
            {this.state.bannerList.map((v, i) => (
              <a
                key={i}
                href="/"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={v.imgurl}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: "auto" });
                  }}
                />
              </a>
            ))}
          </Carousel>
          <List>
            {this.state.songList &&
              this.state.songList.length > 0 &&
              this.state.songList.map((v, i) => (
                <Item
                  onClick={this.props.play.bind(
                    this,
                    this.state.songList,
                    i,
                    v.hash
                  )}
                  multipleLine
                  key={i}
                  arrow="horizontal"
                >
                  {v.filename}
                </Item>
              ))}
          </List>
        </div>
      </div>
    );
  }
}

export default WrappedComponent(Home);
