import React from "react";
import { connect } from "react-redux";
import { Icon, Flex, WingBlank } from "antd-mobile";
import { toggleSearch, changeTitle } from "../../store/ui/action";
import { searchKeywords, playState } from "../../store/music/action";
import style from "./style.less";

class Header extends React.Component {
  state = {
    value: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.search) {
      this.search.focus();
    }
  }

  showSearch = () => {
    this.props.toggleSearch({ showSearch: true });

    const player = { ...this.props.player };
    player.detailPlayerFlag = false;
    this.props.playState({ player: player });
  };

  back = () => {
    const player = { ...this.props.player };
    if (player.detailPlayerFlag === true) {
      player.detailPlayerFlag = false;
      this.props.playState({ player: player });

      const head = { ...this.props.head };
      head.back = false;
      head.title = "MUSIC";
      this.props.changeTitle({ head: head });
    } else {
      window.history.go(-1);
      const head = { ...this.props.head };
      head.back = false;
      head.title = "MUSIC";
      this.props.changeTitle({ head: head });
    }
  };

  render() {
    return (
      <div className={[this.props.showSearch ? style.hide : style.show]}>
        <WingBlank style={{ height: "100%" }}>
          <Flex justify="between" align="center" style={{ height: "100%" }}>
            <div className={style.backBtn}>
              {this.props.back ? (
                <Icon type="left" size="md" color="#fff" onClick={this.back} />
              ) : (
                <Icon type="left" size="md" color="#2ca2f9" />
              )}
            </div>
            <div>
              <p className={style.title}>{this.props.title}</p>
            </div>
            <div className={style.searchBtn}>
              <Icon type="search" color="#fff" onClick={this.showSearch} />
            </div>
          </Flex>
        </WingBlank>
      </div>
    );
  }
}

export default connect(
  state => ({
    title: state.ui.head.title,
    showSearch: state.ui.showSearch,
    back: state.ui.head.back,
    player: state.music.player,
    head: state.ui.head
  }),
  { toggleSearch, searchKeywords, playState, changeTitle }
)(Header);
