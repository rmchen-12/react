import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { SearchRoute } from "./thunkRoutes";

const host = "";
const Routes = () => (
  <Router>
    <React.Fragment>
      <NavBar />
      <main className="main">
        <Switch>
          <Route path={`/${host}search`} component={SearchRoute} />
          <Route path={`/${host}subject`} component={SearchRoute} />
          <Route path={`/${host}celebrity`} component={SearchRoute} />
          <Route path={`/${host}chart`} component={SearchRoute} />
          <Route path={`/${host}cinema`} component={SearchRoute} />
          <Route path={`/${host}tag`} component={SearchRoute} />
          <Route path={`/${host}`} component={SearchRoute} />
          <Route path={`/*`} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  </Router>
);

export default Routes;
