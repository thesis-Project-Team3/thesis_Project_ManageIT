import React from 'react';
// import Select from 'react-select';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import $ from 'jquery';
import {
  Button,
  Card,
  CardHeader,
  // CardTitle,
  CardBody,
  Label,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap';
// import { InvalidatedProjectKind } from 'typescript';

class UpdateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null,
      projects: [],
      description: '',
      deadline: '',
      profileInformations: '',
    };
  }

  handleClick(e) {
    e.preventDefault();
    var title = this.state.singleSelect;
    var description = $('#inputDescription').val();
    var deadline = $('#inputDate').val();
    console.log(title, description, deadline);
    axios.post('http://localhost:5000/project/update', {
      title,
      description,
      deadline,
    });
    // .then((res) => {
    //   const description = res.data[0].description;
    //   this.setState({ description });
    //   console.log(res.data)
    // });
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

    // ---------------------------
    // var arr = []
    axios
      .get('http://localhost:5000/project/create/')
      .then((response) => {
        // response.data.map((proj, i) => {
        //   arr.push({ value: i.toString(), label: proj.title })
        //   return arr
        // })
        this.setState({ projects: response.data });
      })
      .catch((err) => console.log('Error', err));
    // this.setState({ projects: arr })
  }
  render() {
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
                  <h5 className="title">Update a Project</h5>
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
                          <Label for="singleSelect">Choose a Project :</Label>
                          <Input
                            type="select"
                            name="singleSelect"
                            onChange={(value) => {
                              this.setState({
                                singleSelect: value.currentTarget.value,
                              });
                            }}
                            id="inputSelect"
                            required
                          >
                            {options}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="11">
                        <FormGroup>
                          <label>Project Description</label>
                          <Input
                            cols="100"
                            id="inputDescription"
                            placeholder="Here can be your description"
                            rows="10"
                            type="textarea"
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
                    onClick={this.handleClick.bind(this)}
                  >
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

export default UpdateProject;
