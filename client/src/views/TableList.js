
import React from "react";
import axios from 'axios';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      projects: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/project/create/')
      .then((response) => { 
        var projects = response.data
        console.log(projects)
        this.setState({projects})
      })
  }

  render() {
    var ProjectHistory = this.state.projects.map((proj,i)=>{
      return (<tr key={i}>
        <td>{proj.title}</td>
        <td>{proj.description}</td>
        <td>{proj.deadline.slice(0,10)}</td>
        <td className="text-center">$36,738</td>
        <th>{proj.status}</th>
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
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Do before</th>
                        <th className="text-center">Cost</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ProjectHistory}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            {/* <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
