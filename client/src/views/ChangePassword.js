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

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: '',
      projects: [],
      modal: false,
      profileInformations: '',
      newFeature: {
        featureCreator: '',
        featureTitle: '',
        featureDescription: '',
        featureDeadline: '',
        featureStatus: '',
        featureProgress: '',
      },
      titleError: '',
      descriptionError: '',
      deadlineError: '',
      singleSelectError: '',
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleChange = ({ currentTarget: input }) => {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    const newFeature = { ...this.state.newFeature };
    newFeature.featureCreator = user._id;
    newFeature[input.name] = input.value;
    switch (user.role) {
      case 'Employee':
        newFeature.featureStatus = 'Created';
        newFeature.featureProgress = `Created by ${this.state.profileInformations.fullname}`;
        break;
      case 'Head':
        newFeature.featureStatus = 'Created';
        newFeature.featureProgress = `Created by ${this.state.profileInformations.department} Head`;
        break;
    }
    this.setState({ newFeature });
  };

  handleSubmit = (e) => {
    var isValid = this.validate();
    if (isValid) {
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
    }
  };

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);

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

  validate = () => {
    let singleSelectError = '';
    let titleError = '';
    let descriptionError = '';
    let deadlineError = '';
    if (this.state.newFeature.featureTitle.length < 6) {
      titleError = 'invalid title';
    }
    if (this.state.newFeature.featureDescription.length < 16) {
      descriptionError = 'invalid description';
    }
    if (!this.state.newFeature.featureDeadline) {
      deadlineError = 'you need to set a deadline';
    }
    if (!this.state.singleSelect) {
      singleSelectError = 'you need to choose a project';
    }
    if (titleError || descriptionError || deadlineError || singleSelectError) {
      this.setState({
        titleError,
        descriptionError,
        deadlineError,
        singleSelectError,
      });
      return false;
    }
    return true;
  };

  render() {
    const defaultImageURL =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjGSxm1_lBkpyvSzWDPI9EPOmlwLCtxD0B_g&usqp=CAU';
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
                  <h5 className="title">Change Password</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Existing Password</label>
                          <Input
                            placeholder="Enter your actual password"
                            type="text"
                            value={newFeature.featureTitle}
                            onChange={this.handleChange}
                            name="featureTitle"
                          />
                          <div style={{ fontSize: 12, color: 'red' }}>
                            {this.state.titleError}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>New Password</label>
                          <Input
                            placeholder="Enter your new password"
                            type="text"
                            value={newFeature.featureTitle}
                            onChange={this.handleChange}
                            name="featureTitle"
                          />
                          <div style={{ fontSize: 12, color: 'red' }}>
                            {this.state.titleError}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Confirm New Password</label>
                          <Input
                            placeholder="Confirm your new password"
                            type="text"
                            value={newFeature.featureTitle}
                            onChange={this.handleChange}
                            name="featureTitle"
                          />
                          <div style={{ fontSize: 12, color: 'red' }}>
                            {this.state.titleError}
                          </div>
                        </FormGroup>
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
                        src={
                          profileInformations.profileImageURL
                            ? profileInformations.profileImageURL
                            : defaultImageURL
                        }
                      />
                      <h5 className="title">{profileInformations.fullname}</h5>
                    </a>
                    <p className="description">
                      {profileInformations.department} Department{' '}
                      {jwtDecode(localStorage.getItem('token')).role}
                    </p>
                  </div>
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

export default ChangePassword;
