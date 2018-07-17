import React from "react";
import viewGenerator from "../../../utils/fetchGenerator/viewGenerator";
import { pageName, moduleName } from "./constant";
import { API_SEARCH } from "../../../constants";
import DoubanPagination from "../../../components/DoubanPagination";
// import {} from "../../../components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class SearchContent extends React.Component {
  render() {
    console.log(this.props.payload);
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => {
  let search = state[pageName][moduleName];
  return {
    isLoading: search.isLoading,
    payload: search.payload
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(SearchContent)
);
