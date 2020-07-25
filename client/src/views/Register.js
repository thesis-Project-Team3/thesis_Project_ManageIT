import React from 'react';
import axios from 'axios';
import Select from 'react-select';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

class Register extends React.Component {
  state = {
    RegisterInformations: {
      department: '',
      fullname: '',
      email: '',
      password: '',
    },
  };
  componentDidMount() {
    document.body.classList.toggle('register-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('register-page');
  }

  handleChangeSelect = (e) => {
    const RegisterInformations = { ...this.state.RegisterInformations };
    RegisterInformations.department = e.value;
    this.setState({ RegisterInformations });
  };

  handleChange = ({ currentTarget: input }) => {
    const RegisterInformations = { ...this.state.RegisterInformations };
    RegisterInformations[input.name] = input.value;
    this.setState({ RegisterInformations });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/users', this.state.RegisterInformations)
      .then((response) => {
        console.log(response.data);
      })

      .catch((err) => console.log('Error', err));
  };
  render() {
    const { RegisterInformations } = this.state;
    return (
      <>
        <div className="content">
          <Container>
            {/* <Row> */}
            {/* <Col className="ml-auto" md="5">
                <div className="info-area info-horizontal mt-5">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-wifi" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Marketing</h3>
                    <p className="description">
                      We've created the marketing campaign of the website. It
                      was a very interesting collaboration.
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-triangle-right-17" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Fully Coded in HTML5</h3>
                    <p className="description">
                      We've developed the website with HTML5 and CSS3. The
                      client has access to the code using GitHub.
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-info">
                    <i className="tim-icons icon-trophy" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Built Audience</h3>
                    <p className="description">
                      There is also a Fully Customizable CMS Admin Dashboard for
                      this product.
                    </p>
                  </div>
                </div>
              </Col> */}

            <Col className="mr-auto" lg="8" md="6">
              <Form className="form">
                <Card className="card-register card-white">
                  <CardHeader>
                    <img alt="..." src={require('./card-primary.png')} />
                    <CardTitle tag="h1">Add a new head of department</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col lg="10" md="10" sm="3">
                        <FormGroup>
                          <label>Employees</label>
                          <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            placeholder="Choose Department"
                            name="department"
                            id="department"
                            value={this.state.department}
                            onChange={this.handleChangeSelect}
                            options={[
                              {
                                value: 'financial',
                                label: 'Financial Department',
                              },
                              {
                                value: 'accounting',
                                label: 'Accounting Department',
                              },
                              {
                                value: 'marketing',
                                label: 'Marketing Department',
                              },
                              {
                                value: 'human_ressources',
                                label: 'Human Ressources Department',
                              },
                              { value: 'methods', label: 'Methods Department' },
                              { value: 'it', label: 'IT Department' },
                            ]}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Fullname"
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={RegisterInformations.fullname}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        name="email"
                        id="email"
                        value={RegisterInformations.email}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        value={RegisterInformations.password}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                    {/* <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />I agree to the{' '}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          terms and conditions
                        </a>
                        .
                      </Label>
                    </FormGroup> */}
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={this.handleSubmit}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
            {/* </Row> */}
          </Container>
        </div>
      </>
    );
  }
}

export default Register;
