import React from 'react';
<<<<<<< HEAD
// import Sidebar from './components/sidebar.jsx'
import './App.css';
import CreateProject from './components/createProject/createProject.jsx'
import UpdateProject from './components/updateProject/updateProject.jsx'
// import DemandsArea from './components/receivedDemandArea/receivedDemands.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meetings from './components/meetings/schedule.jsx'


=======
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateProject from './components/createProject/createProject';
import UpdateProject from './components/updateProject/updateProject';
>>>>>>> 9b9c37ebb75061b25e48dd472c9aa969e6a053d1

class App extends React.Component {
  state = {};
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Router>
=======
      <Router>
>>>>>>> 9b9c37ebb75061b25e48dd472c9aa969e6a053d1
        <div>
          <Switch>
            <Route path="/createproject" component={CreateProject} />
            <Route path="/updateproject" component={UpdateProject} />
<<<<<<< HEAD
            <Route path="/meetings" component= {Meetings} />
          </Switch>
        </div>
      </Router>
         {/* <Sidebar /> */}
      </div>
      );
  }
}

=======
          </Switch>
        </div>
      </Router>
    );
  }
}
>>>>>>> 9b9c37ebb75061b25e48dd472c9aa969e6a053d1
export default App;
