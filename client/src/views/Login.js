<<<<<<< HEAD
import React from 'react';
import axios from 'axios';

=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> 32d3fd8a32313234176678bb293393c9d13c4c98
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from 'reactstrap';

class Login extends React.Component {
  state = { loginInformations: { email: '', password: '' } };
  componentDidMount() {
    document.body.classList.toggle('login-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('login-page');
  }

  handleChange = ({ currentTarget: input }) => {
    const loginInformations = { ...this.state.loginInformations };
    loginInformations[input.name] = input.value;
    this.setState({ loginInformations });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       'http://localhost:5000/project/create',
  //       this.state.loginInformations
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })

  //     .catch((err) => console.log('Error', err));
  // };

  render() {
    const { loginInformations } = this.state;
    return (
      <>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form className="form">
                <Card className="card-login card-white">
                  <CardHeader>
                    <img alt="..." src={require('./card-primary.png')} />
                    <CardTitle tag="h1">Log in</CardTitle>
                  </CardHeader>
                  <CardBody>
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
                        value={loginInformations.email}
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
                        type="text"
                        name="password"
                        id="password"
                        value={loginInformations.password}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                  <Link to={"/admin/dashboard"} >
                    <Button
                    // to="/admin/dashboard"
                      block
                      className="mb-3"
                      color="primary"
<<<<<<< HEAD
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
=======
                      // href="/admin/dashboard"
                      // onClick={e => e.preventDefault()}
>>>>>>> 32d3fd8a32313234176678bb293393c9d13c4c98
                      size="lg"
                    >
                      Get Started
                    </Button>
                    </Link>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}

export default Login;
