import React from "react";
import { Spin } from "antd";
import style from "./style.scss";

class Img extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.loadImage(this.props.img_url, img => {
      img.classList.add(this.props.className);
      this.imgWrapper.appendChild(img);
      this.setState({
        loading: false
      });
    });
  }

  loadImage = (url, callback) => {
    var img = new Image(); //创建一个Image对象，实现图片的预下载
    img.onload = function() {
      img.onload = null;
      callback(img);
    };
    img.src = url;
  };

  render() {
    return (
      <div className={style.imgWrapper} ref={e => (this.imgWrapper = e)}>
        <Spin
          tip="loading"
          size="large"
          spinning={this.state.loading}
          className={style.loading}
        />
      </div>
    );
  }
}

export default Img;
