import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./Store";
import Routes from "./routes";
import "./style/base.scss";

ReactDOM.render(
  <Routes />,

  document.getElementById("root")
);
registerServiceWorker();
