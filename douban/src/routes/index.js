import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const host = "";
const Routes = () => (
  <Router>
    <React.Fragment>
      <NavBar />
      <main className="main">
        <Switch>
          <Route path={``} />
          <Route path={``} />
          <Route path={``} />
          <Route path={``} />
          <Route path={`/*`} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  </Router>
);

export default Routes;
