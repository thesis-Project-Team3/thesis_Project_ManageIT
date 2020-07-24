import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import AddHeadDepartment from "./AddHeadDepartment";
import deleteHeadDepartment from "./deleteHeadDepartment";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/deleteHeadDepartment">click me!!</Link>
            </li>
            <li>
              <Link to="/AddHeadDepartment">click me!!</Link>
            </li>
          </ul>
          <hr />
          <Route path="/AddHeadDepartment" component={AddHeadDepartment} />
          <Route
            path="/deleteHeadDepartment"
            component={deleteHeadDepartment}
          />
        </div>
      </Router>
    );
  }
}

export default Routes;
