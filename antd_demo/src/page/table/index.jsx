import React from "react";
import style from "./style.scss";
import TableOne from "./table1";
import TableTwo from "./table2";
import TableThree from "./table3";

export default class Table extends React.Component {
  render() {
    return (
      <div className={style.table}>
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    );
  }
}
