import React from "react";
import { Carousel } from "antd";
import style from "./style.scss";

export default () => (
  <Carousel autoplay className={style.slickSlide}>
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
