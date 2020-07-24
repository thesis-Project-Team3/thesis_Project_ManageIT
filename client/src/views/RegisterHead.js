import React from "react";
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
} from "reactstrap";

class RegisterHead extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("register-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }
  // const DatePicker = require("reactstrap-date-picker");
  async fillHeadFormOnSubmit(e) {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var role = document.getElementById("role").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var Password = document.getElementById("Password").value;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      role === "" ||
      dateOfBirth === "" ||
      phoneNumber === "" ||
      Password === ""
    ) {
      alert("fill all the form please!!");
      return;
    }
    await fetch("http://localhost:5000/CreateNewHeadDepartment", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        role,
        dateOfBirth,
        phoneNumber,
        Password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("role").value = "";
      document.getElementById("dateOfBirth").value = "";
      document.getElementById("phoneNumber").value = "";
      document.getElementById("Password").value = "";
    });
  }
  render() {
    return (
      <>
        <div className="content">
          <Container>
            <Col className="mr-auto" lg="8" md="6">
              <Form className="form">
                <Card className="card-register card-white">
                  <CardHeader>
                    <img alt="..." src={require("./card-primary.png")} />
                    <CardTitle tag="h1">Add Head of Department</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <FormGroup>
                      <Label for="exampleSelect">select a department:</Label>
                      <Input type="select" name="select" id="role" required>
                        <option>head of financial department</option>
                        <option>head of accounting department</option>
                        <option>head of marketing department</option>
                        <option>head of HR department</option>
                        <option>head of Methods department</option>
                      </Input>
                    </FormGroup>
                    <Row>
                      <Col lg="6" md="4">
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="firstName"
                            type="text"
                            id="firstName"
                            required
                          />
                        </InputGroup>
                      </Col>
                      <Col lg="6" md="4">
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="lastName"
                            type="text"
                            id="lastName"
                            required
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        id="email"
                        required
                      />
                    </InputGroup>
                    <FormGroup>
                      <input
                        type="date"
                        className="form-control datetimepicker"
                        min="1970-07-18"
                        id="dateOfBirth"
                        required
                      />
                    </FormGroup>

                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-phone fa-rotate-180" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="phoneNumber"
                        type="tel"
                        id="phoneNumber"
                        maxLength="8"
                        minLength="8"
                        required
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
                        id="Password"
                        required
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={
                        ((e) => e.preventDefault(),
                        this.fillHeadFormOnSubmit.bind(this))
                      }
                      size="lg"
                    >
                      Register
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

export default RegisterHead;
