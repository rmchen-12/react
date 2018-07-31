import React from "react";
import style from "./style.less";
import ContainerWrapper from "../../container";
import { Slider, Flex } from "antd-mobile";
import Icon from "../../component/icon";

class PlayerDetail extends React.Component {
  state = {};

  songLrc() {
    if (this.props.audio.lyrics) {
      let temp = this.props.audio.lyrics.split("\r\n");
      temp = temp.splice(0, temp.length - 1);
      temp = temp.map(value => {
        var time = value.substr(1, 5);
        var seconds =
          parseInt(time.split(":")[0], 10) * 60 +
          parseInt(time.split(":")[1], 10);
        var lrcContent = value.substr(10);
        return {
          seconds,
          lrcContent
        };
      });
      return temp;
    }
  }

  formatTime = timeTemp => {
    let m = Math.floor(timeTemp / 60);
    let s = Math.floor(timeTemp % 60);
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  };

  render() {
    const currentLength = this.props.audio.currentLength;
    const currentTime = this.formatTime(currentLength);
    const duration = this.formatTime(this.props.audio.songLength);
    const SongLyrics = this.songLrc();
    const Lyrics =
      SongLyrics &&
      SongLyrics.map((v, i) => (
        <p className={v.seconds >= currentLength ? "isCurrent" : ""} key={i}>
          {v.lrcContent}
        </p>
      ));

    const offset =
      SongLyrics &&
      (SongLyrics.length - document.querySelectorAll(".isCurrent").length - 2) *
        -25;

    return (
      <div
        className={[
          this.props.player.detailPlayerFlag ? style.playerDetail : style.hide
        ]}
      >
        <div className={style.detailBg}>
          <img src={this.props.audio.imgUrl} alt="" />
        </div>
        <div className={style.content}>
          <div className={style.avatar}>
            <img src={this.props.audio.imgUrl} alt="songImg" />
          </div>
          <div className={style.lyrics}>
            <div style={{ marginTop: offset }}>{Lyrics}</div>
          </div>
          <Flex align="center" justify="between" className={style.sliderWrap}>
            <div className={style.currentTime}>{currentTime}</div>
            <div className={style.slider}>
              <Slider
                min={0}
                max={this.props.audio.songLength}
                value={this.props.audio.currentLength}
                onChange={this.props.change.bind(this, true)}
              />
            </div>
            <div className={style.totalTime}>{duration}</div>
          </Flex>
          <Flex justify="around" align="center" className={style.control}>
            <div className={style.preSong} onClick={this.props.prevSong}>
              <Icon type="pre" color="#fff" size="25" />
            </div>
            <div className={style.pause} onClick={this.props.playState}>
              {this.props.player.isPlay ? (
                <Icon type="pause" color="#fff" size="25" />
              ) : (
                <Icon type="play" color="#fff" size="25" />
              )}
            </div>
            <div className={style.nextSong} onClick={this.props.nextSong}>
              <Icon type="next" color="#fff" size="25" />
            </div>
          </Flex>
        </div>
      </div>
    );
  }
}

export default ContainerWrapper(PlayerDetail);
