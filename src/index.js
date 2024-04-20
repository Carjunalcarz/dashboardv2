import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from "views/Login.js";
import Dashboard from "./dashboard/views/Dashboard";
import Profile from "./dashboard/views/Profile_view";
import Sidebar from "dashboard/components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route>
            {/* Navbar and Sidebar should be outside the Switch */}
            <Sidebar />
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              {/* Redirect to dashboard if route doesn't match */}
              <Redirect to="/dashboard" />
            </Switch>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
