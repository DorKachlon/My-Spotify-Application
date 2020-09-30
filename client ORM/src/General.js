import React from "react";
import App from "./App";
import Login from "./components/Login";
import Guest from "./components/Guest";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function General() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/guest" component={Guest} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    );
}
