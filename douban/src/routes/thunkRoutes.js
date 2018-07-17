import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { view as SearchPage } from "../pages/SearchPage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const SearchRoute = ({ match, location }) => {
  return <SearchPage query={location.search.substring(3)} />;
};

export { SearchRoute };
