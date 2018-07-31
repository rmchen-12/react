import React from "react";
import style from "./index.less";
import { Flex, WingBlank } from "antd-mobile";
import ContainerComponent from "../../container";
import Icon from "../icon";

class Player extends React.Component {
  state = {};

  showDetail() {
    const player = { ...this.props.player };
    player.detailPlayerFlag = true;
    this.props.changeSongActions.playState({ player: player });

    const head = { ...this.props.head };
    head.back = true;
    head.title = this.props.audio.title;
    this.props.changeSongActions.changeTitle({ head: head });

    this.props.changeSongActions.toggleSearch({ showSearch: false });
  }

  render() {
    return (
      <div className={style.player}>
        <WingBlank size="md">
          <audio
            src={this.props.audio.songUrl}
            onEnded={this.props.nextSong}
            onTimeUpdate={this.props.change}
            autoPlay
            id="audioPlayer"
          />
          <Flex className={style.playerPanel} align="center">
            <div className={style.songImg} onClick={this.showDetail.bind(this)}>
              <img src={this.props.audio.imgUrl} alt="audioImg" />
            </div>
            <div className={style.songInfo}>
              <p className={style.title}>{this.props.audio.title}</p>
            </div>
            <div className={style.songControl}>
              <div className={style.preSong} onClick={this.props.prevSong}>
                <Icon type="pre" color="#fff" size="20" />
              </div>
              <div className={style.pause} onClick={this.props.playState}>
                {this.props.player.isPlay ? (
                  <Icon type="pause" color="#fff" size="20" />
                ) : (
                  <Icon type="play" color="#fff" size="20" />
                )}
              </div>
              <div className={style.nextSong} onClick={this.props.nextSong}>
                <Icon type="next" color="#fff" size="20" />
              </div>
            </div>
          </Flex>
        </WingBlank>
      </div>
    );
  }
}

export default ContainerComponent(Player);
