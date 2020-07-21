import React from "react";
import Select from "react-select";
// import Datetime from 'react-datetime';
// import ReactDatetime from "react-datetime";
// reactstrap components
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
  Col
} from "reactstrap";
import axios from "axios";

class ScheduleMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           subject:"",
          // singleSelect: null,
          date:"",
          employees: [],
          // tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"]
        };
      }
      handleChange = e =>{
        this.setState({ [e.target.id]: e.target.value
        ,[e.target.id]: e.target.value}, ()=>{console.log(this.state)})
        
      }
      handleChange1=(e) => {
       
    this.setState({ employees: e }, ()=>{console.log(this.state)});
      }

 
      submit = e =>{
        e.preventDefault()
        axios.post('http://localhost:5000/meeting/create',this.state)
           .then(()=>{
          console.log('data sent')
          })
          .catch(()=>{
          console.log('error')
          })
          }
      
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Schedule a Meeting</h5>
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
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Subject</label>
                          <Input
                            placeholder="Subject for the meeting"
                            type="text"
                            value={this.state.subject}
                            onChange={this.handleChange}
                            id="subject"
                            // onChange={value =>
                            //   this.setState({ subject: value })
                            // }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="10" md="10" sm="3">
                      <FormGroup>
                          <label>Employees</label>
                          <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            placeholder="Choose Employee"
                            name="multipleSelect"
                            closeMenuOnSelect={false}
                            isMulti
                            value={this.state.employees}
                            // onChange={value =>
                            //   this.setState({ employees: value })
                            // }
                            onChange={this.handleChange1}
                            // id="employees"
                            options={[
  
                              { value: "2", label: "Mohamed Amine Oueslati " },
                              { value: "3", label: "Oussema Sferi" },
                              { value: "4", label: "Ranoua Lachheb" },
                              { value: "5", label: "Adam Boulawdhen" },
                              { value: "6", label: "Hamza Ouni " },
                              { value: "7", label: "Khaled Hbaieb" },
                              { value: "8", label: "Ahmed Fenni " }
                            ]}
                          />
                          </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                      <Col xs={5} md={10} className="px-md-1">
                        <Card>
                          <CardBody>
                            <FormGroup>
                            <label className="label-control">Date : </label>
                            <input type="datetime-local" className="form-control datetimepicker" 
                            min="2020-07-18T08:30"
                           value={this.state.date}
                           onChange={this.handleChange}
                           id="date"
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
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src="https://i.postimg.cc/2ysnx7H8/photo-1511367461989-f85a21fda167.jpg"
                      />
                      <h5 className="title">Mohamed Amine Oueslati</h5>
                    </a>
                    <p className="description">Accounting Department Employee</p>
                  </div>
                  <div className="card-description">
                    ME .......
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

export default ScheduleMeeting;