import React from 'react';
import axios from 'axios';
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

class ProjectHistoryHeads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/project/create/').then((response) => {
      var projects = response.data;
      console.log(projects);
      this.setState({ projects });
    });
  }

  handleSubmit(i) {
    // e.preventDefault();
    axios
      .post('http://localhost:5000/project/index', { index: i })
      .then((response) => {
        console.log(response.data);
        window.location = '/admin/project-Info';
      });
    // .catch((err) => console.log('Error', err));
  }

  render() {
    var ProjectHistory = this.state.projects.map((proj, i) => {
      return (
        <tr key={i}>
          <td>{proj.title}</td>
          <td>{proj.deadline.slice(0, 10)}</td>
          <th>{proj.status}</th>
          <th>{proj.progress}</th>
          <td className="text-center">
            <Button
              onClick={this.handleSubmit.bind(this, i)}
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
    });
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
                        <th>Do before</th>
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
  }
}

export default ProjectHistoryHeads;
