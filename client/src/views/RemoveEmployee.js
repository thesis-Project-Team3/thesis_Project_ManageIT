import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

class RemoveHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      name: "",
      email: "",
      message: "",
    };
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onRoleChoose(event) {
    this.setState({ role: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/deleteHeadDepartment", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
    this.setState({ role: "", name: "", email: "", message: "" });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Remove Head of Department</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="10">
                        <FormGroup>
                          <Label for="exampleSelect">
                            select a department:
                          </Label>
                          <Input
                            type="select"
                            name="select"
                            id="role"
                            required
                            value={this.state.role}
                            onChange={this.onRoleChoose.bind(this)}
                          >
                            <option> financial department</option>
                            <option> accounting department</option>
                            <option> marketing department</option>
                            <option> HR department</option>
                            <option> Methods department</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Name</label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Name"
                              type="text"
                              value={this.state.name}
                              onChange={this.onNameChange.bind(this)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="email"
                              type="email"
                              value={this.state.email}
                              onChange={this.onEmailChange.bind(this)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="10" md="8">
                        <FormGroup>
                          <label>Message</label>
                          <Input
                            cols="80"
                            placeholder="Message"
                            rows="4"
                            type="textarea"
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                          />
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
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Confirm
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RemoveHead;
