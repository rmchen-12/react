import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [];

[...Array(46).keys()].forEach((v, i) => {
  data.push({
    key: i,
    name: `king of king ${i}`,
    age: 32,
    address: `China ${i}`
  });
});

export default class TableTwo extends React.Component {
  state = {
    selectedRowKeys: []
  };

  onSelectChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`);
    this.setState({
      selectedRowKeys
    });
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "全部选择",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()]
            });
          }
        },
        {
          key: "odd",
          text: "选中奇数",
          onSelect: changeableRowKeys => {
            console.log(changeableRowKeys);
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({
              selectedRowKeys: newSelectedRowKeys
            });
          }
        },
        {
          key: "even",
          text: "选中偶数",
          onSelect: changeableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
              if (index % 2 === 1) {
                return true;
              }
              return false;
            });
            this.setState({
              selectedRowKeys: newSelectedRowKeys
            });
          }
        }
      ],
      onSelection: this.onSelection
    };
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}
