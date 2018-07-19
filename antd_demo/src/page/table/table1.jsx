import React from "react";
import { Table, Icon } from "antd";
const { Column } = Table;

class TableOne extends React.Component {
  state = {};
  render() {
    return (
      <Table dataSource={data}>
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <span className="ant-divider" />
              <Icon type="delete" />asdfeee
            </span>
          )}
        />
      </Table>
    );
  }
}

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

export default TableOne;
