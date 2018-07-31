import React from "react";
import ReactDOM from "react-dom";
import Route from "./route";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import FastClick from "fastclick";
import store from "./store";
import "./utils/setRem";
import "./style/base.less";

FastClick.attach(document.body);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
};

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
