import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

class CreateProject extends React.Component {
  state = {
    newProject: {
      title: '',
      department: '',
      description: '',
      deadline: '',
      user: jwtDecode(localStorage.getItem('token')),
    },
    profileInformations: '',
    modal: false,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    axios
      .get(`http://localhost:5000/users/${user._id}`)
      .then((response) => {
        console.log(response.data);
        this.state.newProject.department = response.data[0].department;
        this.setState(
          {
            profileInformations: response.data[0],
          }
          // () => console.log(this.state.profileInformations.fullname)
        );
      })
      .catch((err) => console.log('Error', err));
  }
  handleChange = ({ currentTarget: input }) => {
    const newProject = { ...this.state.newProject };
    newProject[input.name] = input.value;
    this.setState({ newProject });
  };

  handleSubmit = (e) => {
    this.setState({ modal: !this.state.modal });
    e.preventDefault();
    axios
      .post('http://localhost:5000/project/create', {
        department: this.state.profileInformations.department,
        ...this.state.newProject,
        status: 'Created',
        progress: `Created by ${this.state.profileInformations.fullname}`,
      })
      .then((response) => {})

      .catch((err) => console.log('Error', err));
  };

  render() {
    const { newProject, profileInformations } = this.state;
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );

    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Create a New Project</h5>
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
                          <label>Title</label>
                          <Input
                            placeholder="Project Title"
                            type="text"
                            value={newProject.title}
                            onChange={this.handleChange}
                            id="title"
                            name="title"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="11">
                        <FormGroup>
                          <label>Project Description</label>
                          <Input
                            cols="100"
                            // defaultValue=""
                            placeholder="Here can be your description"
                            rows="10"
                            type="textarea"
                            value={newProject.description}
                            onChange={this.handleChange}
                            id="description"
                            name="description"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5} md={10} className="px-md-1">
                        <Card>
                          <CardBody>
                            <FormGroup>
                              <Label className="label-control">
                                Do it before :
                              </Label>
                              <Input
                                value={newProject.deadline}
                                onChange={this.handleChange}
                                className="form-control datetimepicker"
                                type="date"
                                id="deadline"
                                name="deadline"
                                min="2020-07-18"
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
                          Project has been successfully created !
                        </center>
                      </ModalBody>
                      <ModalFooter>
                        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
                        <Button
                          color="secondary"
                          onClick={this.toggle}
                          href="/admin/projects-history-employees"
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

export default CreateProject;
