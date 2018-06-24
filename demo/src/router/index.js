import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import asyncComponent from "@/utils/asyncComponent";

import home from "@/pages/home/home";
const record = asyncComponent(() => import("@/pages/record/record"));
const helpCenter = asyncComponent(() =>
  import("@/pages/helpCenter/helpCenter")
);
const production = asyncComponent(() =>
  import("@/pages/production/production")
);
const balance = asyncComponent(() => import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/record" component={record} />
          <Route path="/helpCenter" component={helpCenter} />
          <Route path="/production" component={production} />
          <Route path="/balance" component={balance} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    );
  }
}
