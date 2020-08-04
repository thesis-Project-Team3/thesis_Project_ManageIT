import React from 'react';
// import Select from 'react-select';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import $ from 'jquery';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
// import { InvalidatedProjectKind } from 'typescript';

class UpdateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null,
      projects: [],
      modal: false,
      profileInformations: '',
      newFeature: {
        featureTitle: '',
        featureDescription: '',
        featureDeadline: '',
        featureStatus: '',
        featureProgress: '',
      },
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleChange = ({ currentTarget: input }) => {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    const newFeature = { ...this.state.newFeature };
    newFeature[input.name] = input.value;
    switch (user.role) {
      case 'Employee':
        newFeature.featureStatus = 'Created';
        newFeature.featureProgress = `Created by ${this.state.profileInformations.fullname}`;
        break;
      case 'Head':
        newFeature.featureStatus = 'Created';
        newFeature.featureProgress = `Created by ${this.state.profileInformations.fullname} Head`;
        break;
    }
    this.setState({ newFeature });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.singleSelect);
    axios
      .patch(
        `http://localhost:5000/project/create/${this.state.singleSelect}`,
        this.state.newFeature
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log('Error', err));
  };

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    // switch (user.role) {
    //   case 'Employee':
    //     this.state.featureStatus =
    //       'Created by ' + user.department + ' Employee';
    //     break;
    //   case 'Head':
    //     this.state.featureStatus = 'Created by ' + user.department + ' Head';
    //     break;
    // }
    //getting user department
    axios
      .get(`http://localhost:5000/users/${user._id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          profileInformations: response.data[0],
        });
      })
      .catch((err) => console.log('Error', err));

    // ---------------------------
    //getting user projects by department
    axios
      .get(
        `http://localhost:5000/project/update/projectsByDepartment/${user.department}`
      )
      .then((response) => {
        // console.log(response.data);
        this.setState({ projects: response.data });
      });
  }
  render() {
    const { newFeature } = this.state;
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
    const { profileInformations } = this.state;
    var options = this.state.projects.map((project, key) => {
      return (
        <option key={key} value={project.title}>
          {project.title}
        </option>
      );
    });
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add a New Feature</h5>
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
                      <Col lg="6" md="6" sm="3" className="pr-md-1">
                        <FormGroup>
                          <Label for="singleSelect">
                            Choose an Existing Project :
                          </Label>
                          <Input
                            type="select"
                            name="singleSelect"
                            onChange={(e) => {
                              this.setState({
                                singleSelect: e.currentTarget.value,
                              });
                            }}
                            id="inputSelect"
                            required
                          >
                            <option selected="selected" disabled>
                              Choose a Project
                            </option>
                            {options}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Feature Title</label>
                          <Input
                            placeholder="Enter the feature title"
                            type="text"
                            value={newFeature.featureTitle}
                            onChange={this.handleChange}
                            name="featureTitle"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="11">
                        <FormGroup>
                          <label>Feature Description</label>
                          <Input
                            cols="100"
                            id="inputDescription"
                            placeholder="Here can be your description"
                            rows="10"
                            type="textarea"
                            value={newFeature.featureDescription}
                            onChange={this.handleChange}
                            name="featureDescription"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5} md={10} className="px-md-1">
                        <Card>
                          <CardBody>
                            <FormGroup>
                              <Label for="exampleDate">Do it before :</Label>
                              <Input
                                type="date"
                                name="date"
                                id="inputDate"
                                placeholder="date placeholder"
                                min="2020-07-18"
                                value={newFeature.featureDeadline}
                                onChange={this.handleChange}
                                name="featureDeadline"
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
                    onClick={this.handleSubmit}
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
                        {' '}
                        <br />{' '}
                        <center>
                          <img
                            src="https://images.assetsdelivery.com/compings_v2/alonastep/alonastep1605/alonastep160500181.jpg"
                            width="200px"
                          />
                          <br />
                          Project has been successfully updated !
                        </center>
                      </ModalBody>
                      <ModalFooter>
                        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
                        <Button
                          color="secondary"
                          onClick={this.toggle}
                          href="/admin/Update-Project"
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

export default UpdateProject;
