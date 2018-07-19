import React from "react";
import Carousel1 from "./carousel1";
import Carousel2 from "./carousel2";
import style from "./style.scss";

export default () => (
  <div className={style.wrapper}>
    <Carousel1 />
    <hr />
    <Carousel2 />
    <hr />
  </div>
);
