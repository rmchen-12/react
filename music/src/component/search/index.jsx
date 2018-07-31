import React from "react";
import style from "./style.less";
import API from "../../api";
import { WhiteSpace, WingBlank, Icon, SearchBar } from "antd-mobile";
import BScroll from "better-scroll";
import ContainerComponent from "../../container";

const options = {
  click: true,
  scrollbar: true,
  fade: true,
  probeType: 3
};

// options.pullDownRefresh = {
//   threshold: 90,
//   stop: 40
// };

options.pullUpLoad = {
  threshold: -60,
  moreTxt: "loading",
  noMoreTxt: "没有更多数据了"
};

class Search extends React.PureComponent {
  state = {
    hot: [],
    list: [],
    search: "",
    page: 1,
    pageSize: 20,
    scroller: null,
    load: "",
    enableScroll: true,
    total: 0
  };

  async query(cb) {
    const res = await API.search({
      keyword: this.state.search,
      page: this.state.page,
      pagesiez: this.state.pageSize,
      showtype: 1
    });
    const data = res.data;
    this.setState(preState => ({
      list: [...preState.list, ...data.info],
      total: data.total
    }));
    const count = this.state.page * this.state.pageSize;
    if (count < data.total) {
      this.setState({
        load: "下拉加载"
      });
    } else {
      this.setState({
        load: "没有更多数据"
      });
    }
    if (typeof cb === "function") {
      cb();
    }
  }

  hotSearch = keyword => {
    this.setState(
      {
        search: keyword
      },
      () => {
        this.query();
      }
    );
  };

  componentDidMount() {
    API.getHot().then(res => {
      this.setState({
        hot: res.data.info
      });
    });
  }

  hideSearch = () => {
    this.props.changeSongActions.toggleSearch({ showSearch: false });

    const head = { ...this.props.head };
    head.back = false;
    this.props.changeSongActions.changeTitle({ head: head });
  };

  change = value => {
    this.setState({
      search: value,
      list: [],
      scroller: null
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.scroller) {
      this.state.scroller.refresh();
    } else {
      this.state.list.length &&
        this.setState({
          scroller: new BScroll(this.list, options)
        });
    }
    //搜索框聚焦
    if (this.search) {
      this.search.focus();
    }
  }

  render() {
    if (this.state.scroller) {
      this.state.scroller.on("pullingUp", () => {
        const count = this.state.page * this.state.pageSize;
        if (this.state.enableScroll && count < this.state.total) {
          this.setState({
            enableScroll: false,
            page: this.state.page + 1,
            load: "加载中...."
          });
          this.query(() => {
            this.state.scroller.finishPullUp();
            this.setState({
              enableScroll: true
            });
          });
        }
      });
    }

    return (
      <div
        className={[this.props.showSearch ? style.search : style.hideSearch]}
      >
        {this.props.showSearch && (
          <div className={style.searchBar}>
            <SearchBar
              style={{ backgroundColor: "#2ca2f9", height: "100%" }}
              placeholder="搜索歌曲"
              ref={e => (this.search = e)}
              onCancel={this.hideSearch}
              onSubmit={this.query.bind(this)}
              showCancelButton="true"
              onChange={value => this.change(value)}
              value={this.state.search}
            />
          </div>
        )}
        <div className={[this.props.showSearch ? style.show : style.hide]}>
          <WingBlank>
            <WhiteSpace size="lg" />
            <div>热搜</div>
            <WhiteSpace />
            <div>
              {this.state.hot &&
                this.state.hot.map((v, i) => (
                  <span
                    className={style.hotItem}
                    key={i}
                    onClick={this.hotSearch.bind(this, v.keyword)}
                  >
                    {v.keyword}
                  </span>
                ))}
            </div>
            <WhiteSpace />
            {this.state.list.length > 0 && (
              <div className={style.queryResult}>
                <div className={style.wrapper} ref={e => (this.list = e)}>
                  <div className={style.content}>
                    {this.state.list.map((v, i) => (
                      <div
                        className={style.listItem}
                        onClick={this.props.play.bind(
                          this,
                          this.state.list,
                          i,
                          v.hash
                        )}
                        key={i}
                      >
                        <p>{v.filename}</p>
                        <Icon type="right" className={style.icon} />
                      </div>
                    ))}
                    <div className={style.loading}>{this.state.load}</div>
                  </div>
                </div>
              </div>
            )}
          </WingBlank>
        </div>
      </div>
    );
  }
}

export default ContainerComponent(Search);
