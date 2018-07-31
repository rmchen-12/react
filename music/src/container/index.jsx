import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as musicActions from "../store/music/action";
import * as uiActions from "../store/ui/action";
import API from "../api";

export default ContainerComponent => {
  class NewComponent extends React.Component {
    state = {};

    setList = (list, index, hash) => {
      const listInfo = {
        songList: list,
        songIndex: index
      };
      this.props.changeSongActions.setList({ listInfo: listInfo });
      this.play(hash);
    };

    play = async hash => {
      this.props.changeSongActions.loading({ audioLoading: true });
      const res = await API.getSong(hash).then(res => res.data);
      const audio = {
        songUrl: res.play_url,
        imgUrl: res.img,
        lyrics: res.lyrics,
        title: res.audio_name,
        singer: res.author_name,
        songLength: res.timelength / 1000,
        currentFlag: false,
        currentLength: 0
      };
      this.props.changeSongActions.playSong({ audio: audio });
      const player = { ...this.props.player };
      player.isPlay = true;
      this.props.changeSongActions.playState({ player: player });
      this.props.changeSongActions.loading({ audioLoading: false });
    };

    playState = e => {
      e.stopPropagation();
      if (this.props.audio.songUrl !== "") {
        const player = { ...this.props.player };
        if (player.isPlay) {
          document.getElementById("audioPlayer").pause();
        } else {
          document.getElementById("audioPlayer").play();
        }
        player.isPlay = !player.isPlay;
        this.props.changeSongActions.playState({ player: player });
      }
    };

    nextSong = e => {
      if (e) {
        e.stopPropagation();
      }
      if (this.props.audio.songUrl !== "") {
        const index =
          this.props.listInfo.songIndex ===
          this.props.listInfo.songList.length - 1
            ? 0
            : this.props.listInfo.songIndex + 1;
        const hash = this.props.listInfo.songList[index].hash;
        this.setList(this.props.listInfo.songList, index, hash);
      }
    };

    prevSong = e => {
      if (e) {
        e.stopPropagation();
      }
      if (this.props.audio.songUrl !== "") {
        const index =
          this.props.listInfo.songIndex === 0
            ? this.props.listInfo.songList.length - 1
            : this.props.listInfo.songIndex - 1;
        const hash = this.props.listInfo.songList[index].hash;
        this.setList(this.props.listInfo.songList, index, hash);
      }
    };

    timeUpdate = (params, value) => {
      let time;
      if (params === true) {
        time = value;
        document.getElementById("audioPlayer").currentTime = value;
      } else {
        time = document.getElementById("audioPlayer").currentTime;
      }
      const audio = { ...this.props.audio };
      audio.currentLength = time;
      this.props.changeSongActions.playSong({ audio: audio });
    };

    render() {
      return (
        <ContainerComponent
          {...this.props}
          {...this.state}
          play={this.setList}
          prevSong={this.prevSong}
          change={this.timeUpdate}
          nextSong={this.nextSong}
          playState={this.playState}
        />
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      player: state.music.player,
      audio: state.music.audio,
      listInfo: state.music.listInfo,
      audioLoading: state.music.audioLoading,
      showSearch: state.ui.showSearch,
      back: state.ui.back,
      head: state.ui.head
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeSongActions: bindActionCreators(
        { ...musicActions, ...uiActions },
        dispatch
      )
    };
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewComponent);
};
