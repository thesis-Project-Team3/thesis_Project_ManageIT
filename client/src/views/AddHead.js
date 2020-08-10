import React from 'react';
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

class RegisterHead extends React.Component {
  state = {
    firstNameError: '',
    lastNameError: '',
    departmentError: '',
    emailError: '',
    passwordError: '',
    dateError: '',
    phoneError: '',
  };
  componentDidMount() {
    document.body.classList.toggle('register-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('register-page');
  }
  // const DatePicker = require("reactstrap-date-picker");
  async fillHeadFormOnSubmit(e) {
    var isValid = this.validate();
    if (isValid) {
      e.preventDefault();
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var fullname = firstName + " " + lastName;
      var email = document.getElementById("email").value;
      var headDepartment = document.getElementById("department").value;
      var department = "";
      if (headDepartment === "Head of Financial Department") {
        department = "Financial"
      } else if (headDepartment === "Head of Accounting Department") {
        department = "Accounting"
      } else if (headDepartment === "Head of Marketing Department") {
        department = "Marketing"
      } else if (headDepartment === "Head of Human Ressources Department") {
        department = "Human Ressources"
      } else if (headDepartment === "Head of Methods Department") {
        department = "Methods"
      } else if (headDepartment === "Head of IT Department") {
        department = "IT"
      }
      var role = 'Head';
      var dateOfBirth = document.getElementById('dateOfBirth').value;
      var phoneNumber = document.getElementById('phoneNumber').value;
      var password = document.getElementById('Password').value;
      if (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        headDepartment === '' ||
        role === '' ||
        dateOfBirth === '' ||
        phoneNumber === '' ||
        password === ''
      ) {
        alert('fill all the form please!!');
        return;
      }
      await fetch('http://localhost:5000/CreateNewHeadDepartment', {
        method: 'POST',
        body: JSON.stringify({
          fullname,
          email,
          department,
          role,
          dateOfBirth,
          phoneNumber,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // .then(() => {});
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('department').value = '';
      document.getElementById('dateOfBirth').value = '';
      document.getElementById('phoneNumber').value = '';
      document.getElementById('Password').value = '';
    }
  }

  validate = () => {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var headDepartment = document.getElementById('department').value;
    var password = document.getElementById('Password').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var firstNameError = '';
    var lastNameError = '';
    var emailError = '';
    var departmentError = '';
    var passwordError = '';
    var dateError = '';
    var phoneError = '';
    if (firstName.length < 3) {
      firstNameError = 'invalid firstname';
    }
    if (lastName.length < 3) {
      lastNameError = 'invalid lastname';
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError = 'invalid or existing email';
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
      passwordError = 'invalid password';
    }
    if (headDepartment === 'choose a department') {
      departmentError = 'you need to choose a department';
    }
    if (!dateOfBirth) {
      dateError = 'you need to pick a date of birth';
    }
    if (!phoneNumber.match(/^(1?(-?\d{2})-?)?(\d{3})(-?\d{3})$/)) {
      phoneError = 'invalid phone number';
    }
    if (
      firstNameError ||
      lastNameError ||
      departmentError ||
      emailError ||
      passwordError ||
      dateError ||
      phoneError
    ) {
      this.setState({
        firstNameError,
        lastNameError,
        departmentError,
        emailError,
        passwordError,
        dateError,
        phoneError,
      });
      return false;
    }
    return true;
  };

  render() {
    return (
      <>
        <div className="content">
          <Container>
            <Col className="mr-auto" lg="8" md="6">
              <Form className="form">
                <Card className="card-register card-white">
                  <CardHeader>
                    <img alt="..." src={require('./card-primary.png')} />
                    <CardTitle tag="h1">Add Head of Department</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <FormGroup>
                      <Label for="exampleSelect">select a department:</Label>
                      <Input
                        type="select"
                        name="select"
                        id="department"
                        required
                      >
                        <option selected disabled>
                          {' '}
                          choose a department{' '}
                        </option>
                        <option> Head of Financial Department </option>
                        <option> Head of Accounting Department </option>
                        <option> Head of Marketing Department </option>
                        <option> Head of Human Ressources Department </option>
                        <option> Head of Methods Department </option>
                        <option> Head of IT Department </option>
                      </Input>
                    </FormGroup>
                    <div style={{ fontSize: 12, color: 'red' }}>
                      {this.state.departmentError}
                    </div>
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
                        <div style={{ fontSize: 12, color: 'red' }}>
                          {this.state.firstNameError}
                        </div>
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
                        <div style={{ fontSize: 12, color: 'red' }}>
                          {this.state.lastNameError}
                        </div>
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
                    <div style={{ fontSize: 12, color: 'red' }}>
                      {this.state.emailError}
                    </div>
                    <FormGroup>
                      <input
                        type="date"
                        className="form-control datetimepicker"
                        min="1970-07-18"
                        id="dateOfBirth"
                        required
                      />
                    </FormGroup>
                    <div style={{ fontSize: 12, color: 'red' }}>
                      {this.state.dateError}
                    </div>
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
                    <div style={{ fontSize: 12, color: 'red' }}>
                      {this.state.phoneError}
                    </div>
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
                    <div style={{ fontSize: 12, color: 'red' }}>
                      {this.state.passwordError}
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="primary"
                      // href="#pablo"
                      onClick={
                        ((e) => e.preventDefault(),
                        this.fillHeadFormOnSubmit.bind(this))
                      }
                      size="lg"
                    >
                      Confirm
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
