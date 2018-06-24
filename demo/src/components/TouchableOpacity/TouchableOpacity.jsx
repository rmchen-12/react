import React from "react";
import { is, fromJS } from "immutable";
import "./TouchableOpacity";

// 点击状态组件

export default class TouchableOpacity extends React.Component {
  handleTouchStart = () => {
    this.refs.btn.style.opacity = "0.3";
  };
  handleTouchEnd = () => {
    this.refs.btn.style.opacity = "1";
    this.props.clickCallBack();
  };
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }
  render() {
    return (
      <div
        className={`btn-con ${this.props.className}`}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        ref="btn"
      >
        {this.props.text || "确认"}
      </div>
    );
  }
}
