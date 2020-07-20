import React from "react";

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
  render() {
    return (
      <>
        <div className="content">
          <Row>
          <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Employees List</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mohamed Amine</td>
                        <td>Oueslati</td>
                        <td>Finance</td>
                        <td className="text-center"><i className="tim-icons icon-trash-simple" /></td>
                      </tr>
                      <tr>
                        <td>Oussema</td>
                        <td>Sferi</td>
                        <td>IT</td>
                        <td className="text-center"><i className="tim-icons icon-trash-simple" /></td>
                      </tr>
                      <tr>
                        <td>Adam</td>
                        <td>Boulawdhen</td>
                        <td>Methods</td>
                        <td className="text-center"><i className="tim-icons icon-trash-simple" /></td>
                      </tr>
                      <tr>
                        <td>Ranoua</td>
                        <td>Lachheb</td>
                        <td>Accounting</td>
                        <td className="text-center"><i className="tim-icons icon-trash-simple" /></td>
                      </tr>
                      <tr>
                        <td>Hamza</td>
                        <td>Ouni</td>
                        <td>Methods</td>
                        <td className="text-center"><i className="tim-icons icon-trash-simple" /></td>
                      </tr>
                      <tr>
                        <td>Khaled</td>
                        <td>Hbaieb</td>
                        <td>Accounting</td>
                        <td className="text-center"><i className="tim-icons icon-trash-simple" /></td>
                      </tr>
                      <tr>
                        <td>Ahmed</td>
                        <td>Fenny</td>
                        <td>Human Resources</td>
                        <td className="text-center"><i className="tim-icons icon-trash-simple" /></td>
                      </tr>
                    </tbody>
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