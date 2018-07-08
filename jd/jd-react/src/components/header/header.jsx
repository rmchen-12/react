import "./header.scss";
import React from "react";

import Swiper from "swiper/dist/js/swiper";
import "swiper/dist/css/swiper.min.css";
import axios from "axios";

export default class Header extends React.Component {
  state = {
    imgUrls: []
  };

  componentDidMount() {
    axios.get(this.props.source).then(res => {
      if (res.data.status) {
        this.setState({
          imgUrls: res.data.data
        });
        new Swiper("#header .swiper-container", {
          loop: true,
          pagination: ".swiper-pagination",
          paginationClickable: true,
          autoplay: 3000
        });
      } else {
        alert(res.data.msg);
      }
    });
  }

  render() {
    let countId = 0;
    return (
      <div id="header">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {this.state.imgUrls
              ? this.state.imgUrls.map(url => {
                  return (
                    <div className="swiper-slide" key={"header" + countId++}>
                      <img src={url} className="img" alt="" />
                    </div>
                  );
                })
              : "没有数据"}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    );
  }
}
