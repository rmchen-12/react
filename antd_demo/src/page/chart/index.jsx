import React from "react";
import Bar from "./bar";
import Line from "./line";
import Pei from "./pie";
import Scatter from "./scatter";
import { Row, Col } from "antd";

import "echarts/lib/chart/scatter";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export const Component = props => {
  return (
    <div>
      <Row>
        <Col span={10} offset={2}>
          <Line />
        </Col>
        <Col span={10} offset={2}>
          <Pei />
        </Col>
      </Row>
      <Row>
        <Col span={10} offset={2}>
          <Bar />
        </Col>
        <Col span={10} offset={2}>
          <Scatter />
        </Col>
      </Row>
    </div>
  );
};

export default Component;
