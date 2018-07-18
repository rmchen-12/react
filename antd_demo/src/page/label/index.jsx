import React from "react";
import Label1 from "./label1";
import Label2 from "./label2";
import Label3 from "./label3";
import style from "./style.scss";

const label = () => (
  <React.Fragment>
    <Label1 className={style.label} />
    <Label2 className={style.label} />
    <Label3 className={style.label} />
  </React.Fragment>
);

export default label;
