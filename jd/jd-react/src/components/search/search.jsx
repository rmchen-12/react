import "./search.scss";
import React from "react";

export default class Search extends React.Component {
  state = {
    bg: "transparent"
  };

  componentDidMount() {
    window.onscroll = e => {
      let realHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      let optatic = 0.8 * (realHeight / 142);
      if (optatic <= 0.8) {
        this.setState({
          bg: `rgba(234,44,44,${optatic})`
        });
      }
    };
  }

  render() {
    let bgColor = this.state.bg ? this.state.bg : "transparent";
    return (
      <div id="search" className="pf" style={{ background: bgColor }}>
        <div className="search pr">
          <div className="sl pa">
            <i />
          </div>
          <div className="frc pr">
            <span className="searchIcon pa" />
            <form>
              <input type="text" placeholder="全场畅饮，部分低至99减50" />
            </form>
          </div>
          <div className="sub pa">
            <span>登录</span>
          </div>
        </div>
      </div>
    );
  }
}
