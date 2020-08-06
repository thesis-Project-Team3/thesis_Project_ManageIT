import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ProjectInfoEmployees from './ProjectInfoEmployees.js';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from 'reactstrap';

class ProjectHistoryEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      userFeatures: [],
      users: [],
      currentIndex: '',
      view: 'false',
    };
  }
  findUser = (projectUser) => {
    var user = this.state.users.find((u) => u._id === projectUser);
    if (user) return user.fullname;
  };
  componentDidMount() {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    //get the the list of projects by user
    axios
      .get(`http://localhost:5000/project/projectsByEmployee/${user._id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ projects: response.data });
      });

    //get the the list of features by user

    axios
      .get(`http://localhost:5000/project/featuresByEmployee/${user._id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ userFeatures: response.data });
      });
    //get the the list of projects by user
    axios.get('http://localhost:5000/users').then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    });
  }

  handleInfo = (id) => {
    // console.log(id);
    this.setState({ currentIndex: id, view: 'true' });
  };

  removeDuplicates = (array) => {
    const uniqueProjects = Array.from(new Set(array.map((a) => a._id))).map(
      (id) => {
        return array.find((a) => a._id === id);
      }
    );
    return uniqueProjects;
  };

  // handleSubmit = (id) => {
  //   e.preventDefault();
  //   axios
  //     .post('http://localhost:5000/project/index', { index: i })
  //     .then((response) => {
  //       console.log(response.data);
  //       window.location = '/admin/project-info-employees';
  //     })
  //     .catch((err) => console.log('Error', err));
  // };

  render() {
    var userProjFeat = [...this.state.projects, ...this.state.userFeatures];
    console.log(userProjFeat);
    console.log(this.removeDuplicates(userProjFeat));
    var ProjectHistory = this.removeDuplicates(userProjFeat).map((project) => {
      if (project) {
        return (
          <tr key={project._id}>
            <td>{project.title}</td>
            <td>{this.findUser(project.user)}</td>
            <td>{project.deadline.slice(0, 10)}</td>
            <th>{project.status}</th>
            <th>{project.progress}</th>
            <td className="text-center">
              <Button
                onClick={() => this.handleInfo(project._id)}
                color="link"
                id="buttonInfo"
                title=""
                type="button"
              >
                <i className="tim-icons icon-notes" />
              </Button>
            </td>
          </tr>
        );
      }
    });

    if (this.state.view === 'false') {
      return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Project List</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Title</th>
                          <th>Creator</th>
                          <th>Do it before</th>
                          <th>Status</th>
                          <th>Progress</th>
                          <th className="text-center">Info</th>
                        </tr>
                      </thead>
                      <tbody>{ProjectHistory}</tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      );
    } else {
      return <ProjectInfoEmployees currentIndex={this.state.currentIndex} />;
    }
  }
}

export default ProjectHistoryEmployees;
