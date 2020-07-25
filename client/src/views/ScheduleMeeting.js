import React from "react";
import Select from "react-select";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
// import Datetime from 'react-datetime';
// import ReactDatetime from "react-datetime";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  // CardTitle,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

class ScheduleMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInformations: "",
      subject: "",
      // singleSelect: null,
      date: "",
      employees: [],
      // tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"]
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
      , [e.target.id]: e.target.value
    }, () => { console.log(this.state) })

  }
  handleChange1 = (e) => {

    this.setState({ employees: e }, () => { console.log(this.state) });
  }


  submit = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/meeting/create', this.state)
      .then(() => {
        console.log('data sent')
      })
      .catch(() => {
        console.log('error')
      })
  }



  componentDidMount() {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    axios
      .get(`http://localhost:5000/users/${user._id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState(
          {
            profileInformations: response.data[0],
          },
          () => console.log(this.state.profileInformations)
        );
      })
      .catch((err) => console.log('Error', err));
  }

  render() {
    const { profileInformations } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Schedule a Meeting</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Department</label>
                          <Input
                            defaultValue={profileInformations.department}
                            disabled
                            placeholder="Department"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Subject</label>
                          <Input
                            placeholder="Subject for the meeting"
                            type="text"
                            value={this.state.subject}
                            onChange={this.handleChange}
                            id="subject"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="10" md="10" sm="3">
                        <FormGroup>
                          <label>Employees</label>
                          <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            placeholder="Choose Employee"
                            name="multipleSelect"
                            closeMenuOnSelect={false}
                            isMulti
                            value={this.state.employees}
                            // onChange={value =>
                            //   this.setState({ employees: value })
                            // }
                            onChange={this.handleChange1}
                            // id="employees"
                            options={[
                              //   {
                              //     value: "",
                              //     label: " Multiple Options",
                              //     isDisabled: true
                              //   },
                              { value: "2", label: "Mohamed Amine Oueslati " },
                              { value: "3", label: "Oussema Sferi" },
                              { value: "4", label: "Ranoua Lachheb" },
                              { value: "5", label: "Adam Boulawdhen" },
                              { value: "6", label: "Hamza Ouni " },
                              { value: "7", label: "Khaled Hbaieb" },
                              { value: "8", label: "Ahmed Fenni " },
                            ]}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5} md={10} className="px-md-1">
                        <Card>
                          <CardBody>
                            <FormGroup>
                              <Label className="label-control">Date :</Label>
                              <Input
                                className="form-control datetimepicker"
                                type="date"
                                id="date"
                                name="deadline"
                                min="2020-07-18"
                                value={this.state.date}
                                onChange={this.handleChange}
                                placeholder="date placeholder"
                              />
                            </FormGroup>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit" onClick={this.submit}>
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src="https://i.postimg.cc/2ysnx7H8/photo-1511367461989-f85a21fda167.jpg"
                      />
                      <h5 className="title">{profileInformations.fullname}</h5>
                    </a>
                    <p className="description">
                      {profileInformations.department} Department Employee
                    </p>
                  </div>
                  <div className="card-description">ME .......</div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ScheduleMeeting;
