import React from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";

class ScheduledMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [],
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    // console.log(user);
    const obj = {
      role: user.role,
      email: user.email,
      department: user.department,
    };
    fetch("http://localhost:5000/filterMeetingsRoutes", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((meetings) => {
        this.setState({ meetings });
        console.log(meetings);
      })
      .catch((err) => console.log("Error", err));
  }

  render() {
    const list = this.state.meetings.map((meeting) => {
      return (
        <tr key={meeting._id}>
          <td>{meeting.subject}</td>
          <td>
            {meeting.employees.map((emp, i) => {
              if (meeting.employees.length - 1 === i) {
                return <span>{emp.label}</span>;
              }
              return <span>{emp.label} - </span>;
            })}
          </td>
          <td>{meeting.date.slice(0, 10)}</td>
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
                    <tbody>{list}</tbody>
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
