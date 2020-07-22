import React from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateProject from './components/createProject/createProject';
import UpdateProject from './components/updateProject/updateProject';

class App extends React.Component {
  state = {};
  // componentDidMount() {
  //   const jwt = localStorage.getItem('token');
  //   const user = jwtDecode(jwt);
  //   console.log(user);
  // }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/createproject" component={CreateProject} />
            <Route path="/updateproject" component={UpdateProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
