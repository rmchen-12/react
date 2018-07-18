import React from "react";
import { Link } from "react-router-dom";
import style from "./style.scss";

import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        className={style.menu}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="smile-o" />
              <span>Antd UI 组件显示</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to="/table">表格组件</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/label">标签页</Link>
          </Menu.Item>
          <SubMenu key="g2" title="表单和轮播图">
            <Menu.Item key="3">
              <Link to="/form">表单</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/carousel">轮播图</Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="global" />
              <span>网络请求处理</span>
            </span>
          }
        >
          <Menu.Item key="5">
            <Link to="/shop">获取商品列表</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="pie-chart" />
              <span>echarts</span>
            </span>
          }
        >
          <Menu.Item key="6">
            <Link to="/echarts">echarts图表</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="edit" />
              <span>富文本编辑</span>
            </span>
          }
        >
          <Menu.Item key="7">
            <Link to="/editor">Editor</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          title={
            <span>
              <Icon type="upload" />
              <span>上传</span>
            </span>
          }
        >
          <Menu.Item key="8">
            <Link to="/upload">上传图片</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;
