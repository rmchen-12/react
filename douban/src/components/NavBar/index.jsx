import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { Link, withRouter } from "react-router-dom";
import style from "./style.scss";
import debounce from "lodash/debounce";
import { actionCreator } from "../../utils/fetchGenerator";
import { API_SEARCH } from "../../constants";
import { pageName } from "../../pages/SearchPage";
import { moduleName } from "../../pages/SearchPage/content";

const Search = Input.Search;

const SearchPreviewItem = ({ item }) => {
  return (
    <Link to={`/subject/${item.id}`}>
      <div className={style.searchPreviewItem} key={item.id}>
        <img
          src={item.images.large}
          className={style.previewImg}
          alt="searchItem"
        />
        <div className={style.previewInfo}>
          <div className={style.previewItemTitle}>{item.title}</div>
          <div className={style.previewItemYear}>{item.year}</div>
          <div className={style.previewItemOriginalTitle}>
            {item.original_title}
          </div>
        </div>
      </div>
    </Link>
  );
};

class SearchPreview extends React.Component {
  state = {
    isHidden: false,
    bodyClickHandler: () => {
      this.setState({
        isHidden: true
      });
    },
    selfClickHandler: e => {
      e.stopPropagation();
    }
  };

  componentDidMount() {
    document.body.addEventListener("click", this.state.bodyClickHandler);
  }

  UNSAFE_componentWillReceiveProps() {
    if (this.isAbelToShowPreview()) {
      this.setState({
        isHidden: false
      });
    }
  }

  isAbelToShowPreview() {
    return (
      this.state.isHidden ||
      this.props.data.isLoading === true ||
      Object.prototype.toString.call(this.props.data.isLoading) ===
        "[object Undefined]"
    );
  }

  render() {
    if (this.isAbelToShowPreview()) {
      return null;
    }
    let subjects = this.props.data.payload.subjects;
    console.log(subjects);
    return (
      <div
        className={style.searchPreviewWrapper}
        ref={preview => {
          this.previewNode = preview;
        }}
      >
        {subjects.slice(0, 6).map(item => {
          return <SearchPreviewItem item={item} key={item.id} />;
        })}
      </div>
    );
  }
}

class NavBar extends React.Component {
  searchQuery(value) {
    this.props.fetchQuery(value);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("props:", this.props.searchPreview);
  }

  debouncedSearch = debounce(this.searchQuery, 300);

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
                <Search
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
                {<SearchPreview data={this.props.searchPreview} />}
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

const mapStateToProps = (state, ownProps) => {
  return {
    searchPreview: state[pageName][moduleName]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuery: query => {
      let queryURL = API_SEARCH.replace(/:query/, query);
      let ac = actionCreator({ pageName, moduleName, URL: queryURL }); //请求数据
      ac(dispatch);
    }
  };
};

let connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default withRouter(connected);
