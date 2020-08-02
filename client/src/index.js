import React from 'react';
import ReactDOM from 'react-dom';
// import jwtDecode from 'jwt-decode';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login.js';
import AdminLayout from 'layouts/Admin/Admin.js';
import RTLLayout from 'layouts/RTL/RTL.js';
import CreateProject from './components/createProject/createProject';

import 'assets/scss/black-dashboard-react.scss';
import 'assets/demo/demo.css';
import 'assets/css/nucleo-icons.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
