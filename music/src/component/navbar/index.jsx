import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.less";
import { Flex } from "antd-mobile";

const nav = [
  { title: "新歌", href: "/" },
  { title: "排行榜", href: "/rank" },
  { title: "热歌", href: "/hot" },
  { title: "歌手", href: "/singer" }
];

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className={style.navbar}>
        {nav.map((v, i) => (
          <NavLink
            exact
            to={v.href}
            key={i}
            activeClassName={style.active}
            className={style.navItem}
          >
            {v.title}
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Navbar;
