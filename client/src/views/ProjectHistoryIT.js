import React from 'react';
import axios from 'axios';
import classNames from "classnames";
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
  ButtonGroup
} from 'reactstrap';

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects1: [],
      projects2: [],
      ProjHistory: "data1"
    };
  }

  setProject = name => {
    this.setState({
      ProjHistory: name
    });
  };

  componentDidMount() {
    axios.get('http://localhost:5000/project/it/').then((response) => {
      var projects1 = response.data[0];
      var projects2 = response.data[1];
      this.setState({ projects1, projects2 });
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
    var ProjectHistory1 = this.state.projects1.map((proj, i) => {
      return (<tr key={i}>
        <td>{proj.title}</td>
        <td>{proj.deadline}</td>
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
      </tr>)
    })
    var ProjectHistory2 = this.state.projects2.map((proj, i) => {
      return (<tr key={i}>
        <td>{proj.title}</td>
        <td>{proj.deadline}</td>
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
      </tr>)
    })
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Project List</CardTitle>
                  <Row>
                    <Col className="text-left" sm="6">
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.ProjHistory === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setProject("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            IT
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.ProjHistory === "data2"
                          })}
                          onClick={() => this.setProject("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            From Methods
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
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
                    <tbody>
                      {this.state.ProjHistory === "data1" ? ProjectHistory1 :
                        ProjectHistory2}</tbody>
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

export default Tables;
