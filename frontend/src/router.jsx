import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Compras from "./pages/compras";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/compras/:nome">
          <Compras />
        </Route>
        <Route path="*">
            {
                <React.Fragment>
                    <h1>404</h1>
                    <a href="/">home</a>
                </React.Fragment>
            }
        </Route>
      </Switch>
    </Router>
  );
}
