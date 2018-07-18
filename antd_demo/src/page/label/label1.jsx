import React from "react";
import { Tabs, Icon } from "antd";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default props => (
  <Tabs defaultActiveKey="1" onChange={callback} className={props.className}>
    <TabPane
      tab={
        <span>
          <Icon type="qq" />qq
        </span>
      }
      key="1"
    >
      Content of Tab Pane 1 <br />
      Content of Tab Pane 1 <br />
      Content of Tab Pane 1 <br />
      Content of Tab Pane 1 <br />
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="wechat" />weixin
        </span>
      }
      key="2"
    >
      Content of Tab Pane 2 <br />
      Content of Tab Pane 2 <br />
      Content of Tab Pane 2 <br />
      Content of Tab Pane 2 <br />
      Content of Tab Pane 2 <br />
      Content of Tab Pane 2 <br />
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="weibo" />weibo
        </span>
      }
      key="3"
    >
      Content of Tab Pane 3 <br />
      Content of Tab Pane 3 <br />
      Content of Tab Pane 3 <br />
    </TabPane>
  </Tabs>
);
