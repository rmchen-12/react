import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import asyncComponent from "../utils/asyncComponent";
import style from "./style.less";
import Navbar from "../component/navbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import App from "../App";
const Home = asyncComponent(() => import("../view/home"));
const Rank = asyncComponent(() => import("../view/rank"));
const RankList = asyncComponent(() => import("../view/rank/rankList"));
const Hot = asyncComponent(() => import("../view/hot"));
const Singer = asyncComponent(() => import("../view/singer"));

export default class Routes extends React.Component {
  render() {
    return (
      <Router className={style.router}>
        <App className={style.wrapper}>
          <Navbar />
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/rank" component={Rank} />
            <Route exact path="/ranklist/:id" component={RankList} />
            <Route exact path="/singer" component={Singer} />
            <Route exact path="/hot" component={Hot} />
          </ReactCSSTransitionGroup>
        </App>
      </Router>
    );
  }
}
