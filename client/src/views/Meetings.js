
import React from "react";
import axios from 'axios'

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

class ScheduledMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meetings: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/meeting/create/')
      .then((response) => {
        this.setState({
          meetings: response.data,
        }, () => console.log(this.state.meetings));

      })

      .catch((err) => console.log('Error', err));
  }

  render() {
    const list = this.state.meetings.map(meeting => {
      return (
        <tr key={meeting._id}>
          <td >{meeting.subject}</td>
          <td>{meeting.employees.map((emp, i) => {
            if (meeting.employees.length - 1 === i) {
              return (<span>{emp.label}</span>)
            }
            return (<span>{emp.label} - </span>)
          })}</td>
          <td>{meeting.date.slice(0, 10)}</td>
        </tr>
      )

    })
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Scheduled Meetings</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Subject</th>
                        <th>Employees</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list}
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

export default ScheduledMeeting;
