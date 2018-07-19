import React from "react";
import style from "./style.scss";
import Img from "../../component/img";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

class Goods extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        {this.props.goods &&
          this.props.goods.map((item, index) => (
            <Row
              type="flex"
              align="bottom"
              className={style.goodsItem}
              key={index}
            >
              <Col span={6}>
                <Img img_url={item.Picture} className={style.img} />
              </Col>
              <Col className={style.text} span={12}>
                <div>{item.Name}</div>
                <div>原价：{item.OldPointPrice}</div>
                <div>现价：{item.PointPrice}</div>
                <div>销量：{item.SoldNum}</div>
              </Col>
              <Col>
                <Button type="primary">
                  <Link to={`/goods_detail?id=${item.ID}`}>查看商品详情</Link>
                </Button>
              </Col>
            </Row>
          ))}
      </React.Fragment>
    );
  }
}

export default Goods;
