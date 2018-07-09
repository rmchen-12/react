import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { Link, withRouter } from "react-router-dom";
import style from "./style.scss";
import debounce from "loadsh/debounce";

class SearchPreview extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div
        className={style}
        ref={preview => {
          this.previewNode = preview;
        }}
      />
    );
  }
}

export default class NavBar extends React.Component {
  searchQuery(value) {
    this.props.fetchQuery(value);
  }

  debouncedSearch() {
    debounce(this.searchQuery, 300);
  }

  render() {
    return (
      <div>
        <div className={style.globalNavItems}>
          <Link to={"/"}>豆瓣</Link>
          <a>读书</a>
          <a>电影</a>
          <a>音乐</a>
        </div>
        <div className={style.movieNav}>
          <div className={style.titleAndSearchWrapper}>
            <div className={style.titleAndSearch}>
              <Link className={style.title} to={"/"}>
                豆瓣电影
              </Link>
              <div className={style.searchBarWrapper}>
                <Input.Search
                  placeholder="搜索电影，电视剧，综艺，影人"
                  className={style.searchBar}
                  onChange={e => {
                    this.debouncedSearch(e.target.value);
                  }}
                  onSearch={value => {
                    this.props.history.location.pathname = `/`;
                    this.props.history.push(`search?q=${value}`);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={style.movieCateNavWrapper}>
            <div className={style.movieCateNav}>
              <Link to="/cinema">影讯&购票</Link>
              <Link to="/chart">排行榜</Link>
              <Link to="/tag?q=电影">分类</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
