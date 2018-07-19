import React from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import style from "./style.scss";

export default () => (
  <div className={style.wrapper}>
    <Form1 /> <hr />
    <Form2 /> <hr />
    <Form3 />
  </div>
);
