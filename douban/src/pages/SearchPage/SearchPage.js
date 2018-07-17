import React from "react";
import { view as SearchData } from "./content/index";

export default class SearchPage extends React.Component {
  render() {
    let query = this.props.query;
    return (
      <div>
        <SearchData query={query} params={{ query: query }} />
      </div>
    );
  }
}
