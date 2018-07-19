import React from "react";
import { Carousel, Spin } from "antd";
import style from "./style.scss";
import Goods from "./storeComponent";
import Img from "../../component/img";

class Shop extends React.Component {
  state = {
    loading: true,
    bannerList: [],
    hotList: []
  };

  componentDidMount() {
    window.Axios.get(window.ApiName.ApiGetHomePage).then(res => {
      const data = res.data.Data;
      this.setState({
        bannerList: data.BannerpageList,
        hotList: data.HotList,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Spin
          tip="loading"
          size="large"
          spinning={this.state.loading}
          className={style.loading}
        />
        <Carousel autoplay className={style.slickSlide}>
          {this.state.bannerList &&
            this.state.bannerList.map((item, index) => (
              <div key={index}>
                <Img img_url={item.Picture} className={style.carouselImg} />
              </div>
            ))}
        </Carousel>
        <div className={style.hotList}>
          <Goods goods={this.state.hotList} />
        </div>
      </div>
    );
  }
}

export default Shop;
