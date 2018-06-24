import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./components/Main";
import HomePageContainer from "./containers/HomePageContainer";
import ResultPageContainer from "./containers/ResultPageContainer";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Main />
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/result" component={ResultPageContainer} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
