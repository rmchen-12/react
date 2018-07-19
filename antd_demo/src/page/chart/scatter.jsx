import React from "react";
import Echarts from "echarts/lib/echarts";

class Scatter extends React.Component {
  componentDidMount() {
    const myChart = Echarts.init(document.getElementById("main1"));
    // 绘制图表
    myChart.setOption({
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
          ],
          type: "scatter"
        }
      ]
    });
  }

  render() {
    return <div id="main1" style={{ width: "100%", height: "400px" }} />;
  }
}

export default Scatter;
