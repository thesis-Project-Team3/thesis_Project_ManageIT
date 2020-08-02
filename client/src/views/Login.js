import React from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
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

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post('http://localhost:5000/auth/', this.state.loginInformations)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('token', response.data);
          window.location = '/admin/dashboard';
        });
    } catch (ex) { }
  };

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
                        type="password"
                        name="password"
                        id="password"
                        value={loginInformations.password}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="mb-3"
                      color="primary"
                      href="#pablo"
                      onClick={this.handleSubmit}
                      // href="/admin/dashboard"
                      // onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Get Started
                    </Button>
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