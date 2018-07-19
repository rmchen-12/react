import React from "react";

class GoodsDetail extends React.Component {
  state = {
    content: null
  };

  componentDidMount() {
    const id = this.props.location.search.slice(4);
    this.setState({
      content: id
    });
  }

  render() {
    return (
      <div>
        <h1>ID:{this.state.content}</h1>
        <hr />
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
        <div>产品展示页面</div>
      </div>
    );
  }
}

export default GoodsDetail;
