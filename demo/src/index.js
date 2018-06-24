import React from "react";
import ReactDOM from "react-dom";
import Route from "./router";
import FastClick from "fastclick";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "./store/store";
import "./utils/setRem"; //rem
import "./style/base.css"; //reset css

FastClick.attach(document.body);

// 监听state变化
// store.subscribe(() => {
//   console.log("store发生了变化");
// });

const render = Component => {
  ReactDOM.render(
    //绑定redux,热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
};

render(Route);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept("./router/", () => {
    render(Route);
  });
}

registerServiceWorker();
