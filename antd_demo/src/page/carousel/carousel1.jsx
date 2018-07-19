import React from "react";
import { Carousel } from "antd";
import style from "./style.scss";

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default () => (
  <Carousel afterChange={onChange} className={style.slickSlide}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
);
