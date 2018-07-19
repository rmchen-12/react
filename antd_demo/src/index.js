import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";
import Router from "./router";
import "./config/globalConfig";

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(Router);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
