import React from "react";
import Select from "react-select";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class ScheduleMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      usersData: [],
      profileInformations: "",
      subject: "",
      // singleSelect: null,
      date: "",
      employees: [],
      // tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"]
      modal: false,
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleChange = (e) => {
    this.setState(
      { [e.target.id]: e.target.value, [e.target.id]: e.target.value },
      () => {
        // console.log(this.state);
      }
    );
  };
  handleChange1 = (e) => {
    this.setState({ employees: e }, () => {});
  };

  makeOptions() {
    const { usersData, options } = this.state;
    for (let i = 0; i < usersData.length; i++) {
      options.push({ value: i, label: usersData[i].fullname });
    }
  }

  submit = (e) => {
    this.setState({ modal: !this.state.modal });
    e.preventDefault();
    axios
      .post("http://localhost:5000/meeting/create", {
        subject: this.state.subject,
        date: this.state.date,
        employees: this.state.employees,
        department: this.state.profileInformations.department,
      })
      .then(() => {
        console.log("data sent");
      })
      .catch(() => {
        console.log("error");
      });
  };

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    axios
      .get(`http://localhost:5000/users/${user._id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState(
          {
            profileInformations: response.data[0],
          }
          // () => console.log(this.state.profileInformations)
        );
      })
      .catch((err) => console.log("Error", err));
    // handling Select Options
    // const { options } = this.state;
    fetch("http://localhost:5000/getAllTheUsers")
      .then((res) => res.json())
      .then((usersData) => {
        this.setState({ usersData });
        // console.log(this.state.usersData);
        this.makeOptions();
      })
      // .then(() => this.makeOptions)
      .catch((err) => console.log(err));
  }

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
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
                            onChange={this.handleChange1}
                            options={this.state.options}
                          ></Select>
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
                  <Button
                    className="btn-fill"
                    color="primary"
                    type="submit"
                    onClick={this.submit}
                  >
                    Submit
                  </Button>
                  <div>
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle}
                      external={externalCloseBtn}
                    >
                      {/* <ModalHeader>Adding Alert !</ModalHeader> */}
                      <ModalBody>
                        {" "}
                        <br />{" "}
                        <center>
                          <img
                            src="https://images.assetsdelivery.com/compings_v2/alonastep/alonastep1605/alonastep160500181.jpg"
                            width="200px"
                          />
                          <br />
                          Meeting has been Scheduled !
                        </center>
                      </ModalBody>
                      <ModalFooter>
                        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
                        <Button
                          color="secondary"
                          onClick={this.toggle}
                          href="/admin/ScheduleMeeting"
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
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
