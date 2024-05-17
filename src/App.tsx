import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import RestrictedRoute from "./Auth/RestrictedRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./Components/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import dash1 from "./Components/vitasdash/dash1";
import dash2 from "./Components/vitasdash/dash2";
import dash3 from "./Components/vitasdash/dash3";
function App() {
  return (
      <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <RestrictedRoute exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/vitasdash/dash1" component={dash1}/>
        <Route exact path="/vitasdash/dash2" component={dash2}/>
        <Route exact path="/vitasdash/dash3" component={dash3}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
