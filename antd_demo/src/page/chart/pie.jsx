import React from "react";
import Echarts from "echarts/lib/echarts";

class Pie extends React.Component {
  componentDidMount() {
    const myChart = Echarts.init(document.getElementById("main3"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "天气情况统计",
        subtext: "虚构数据",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: "center",
        data: ["西凉", "益州", "兖州", "荆州", "幽州"]
      },
      series: [
        {
          type: "pie",
          radius: "65%",
          center: ["50%", "50%"],
          selectedMode: "single",
          data: [
            { value: 1548, name: "幽州" },
            { value: 535, name: "荆州" },
            { value: 510, name: "兖州" },
            { value: 634, name: "益州" },
            { value: 735, name: "西凉" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
  }

  render() {
    return <div id="main3" style={{ width: "100%", height: "400px" }} />;
  }
}

export default Pie;
