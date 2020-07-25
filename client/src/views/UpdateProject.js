import React from 'react';
import Select from 'react-select';
import axios from 'axios';
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
  Input,
  Row,
  Col,
} from 'reactstrap';

class UpdateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null,
      multipleSelect: null,
      projects: [],
    };
  }

// handleChange = e => {
// this.setState({ [e.target.name]: e.target.value })
// console.log(this.state)
// }

// handleChange1=(e) => {
//     this.setState({ selectValue: e.value }, ()=>{console.log(this.state)});
    
// }

  // submit = e =>{
  //   e.preventDefault()
  //   axios.post('http://localhost:5000/project/update', this.state)
  //   .then(()=>{
  //     console.log('data sent')
  //   })
  //   .catch(()=>{
  //     console.log('error')
  //   })
  // }

  componentDidMount() {
    axios
      .get('http://localhost:5000/project/create/')
      .then((response) => {
        console.log(response.data);
        this.setState({
          projects: response.data,
        });
        
      })

      .catch((err) => console.log('Error', err));
  }
  render() {
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
                            defaultValue="Accounting"
                            disabled
                            placeholder="Department"
                            type="text"
                            name="department"
                            value = {this.state.department}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6" md="6" sm="3" className="pr-md-1">
                        <FormGroup>
                          <label>Choose a Project</label>
                          <Select  value={this.state.selectValue}                           
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.singleSelect}
                            onChange={(value) =>
                              this.setState({ singleSelect: value })
                            }
                            options={[
                              { value: '1', label: 'Project 1' },
                              { value: '2', label: 'Project 2' },
                              { value: '3', label: 'Project 3' },
                              { value: '4', label: 'Project 4' },
                              { value: '5', label: 'Project 5' },
                            ]}
                            placeholder="Single Select"
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
                            name= "description"
                            value={this.state.description}                         
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5} md={10} className="px-md-1">
                        <Card>
                          <CardBody>
                            <FormGroup>
                              <label className="label-control">
                                Do it before :{' '}
                              </label>
                              <input
                                type="datetime-local"
                                className="form-control datetimepicker"
                                min="2020-07-18T08:30"
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
                      <h5 className="title">Mohamed Amine Oueslati</h5>
                    </a>
                    <p className="description">
                      Accounting Department Employee
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
