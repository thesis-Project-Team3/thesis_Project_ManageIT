import React from 'react';
// import Sidebar from './components/sidebar.jsx'
import './App.css';
import CreateProject from './components/createProject/createProject.jsx'
import UpdateProject from './components/updateProject/updateProject.jsx'
// import DemandsArea from './components/receivedDemandArea/receivedDemands.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meetings from './components/meetings/schedule.jsx'



class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
        <div>
          <Switch>
            <Route path="/createproject" component={CreateProject} />
            <Route path="/updateproject" component={UpdateProject} />
            <Route path="/meetings" component= {Meetings} />
          </Switch>
        </div>
      </Router>
         {/* <Sidebar /> */}
      </div>
      );
  }
}

export default App;
