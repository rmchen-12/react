import React from "react";
import { Row, Col, Input, Dropdown, Avatar, Menu, Icon } from "antd";
import style from "./style.scss";
import Msg from "../../component/msg";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rmchen-12"
      >
        我的github
      </a>
    </Menu.Item>
    <Menu.Item>
      <Msg />
    </Menu.Item>
    <Menu.Item />
  </Menu>
);

export const Component = props => {
  return (
    <Row>
      <Col span={3}>React+Antd demo</Col>
      <Col span={8} offset={1}>
        <Input placeholder="请输入。。。" />
      </Col>
      <Col span={3} offset={9}>
        <Avatar icon="user" className={style.avatar} />
        <Dropdown overlay={menu}>
          <span className="ant-dropdown-link" href="#">
            rmchen-12<Icon type="down" />
          </span>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Component;
