import React from "react";
import footerStyle from "./style.scss";

export default () => (
  <div className={footerStyle.footerWrapper}>
    <span>© 2005-2017 douban.com, all rights reserved</span>
    <span>
      <span role="img" aria-label="icon">
        🎇
      </span>
      2017-2018 Made By <a href="https://github.com/rmchen-12">rmchen-12</a>
    </span>
  </div>
);
