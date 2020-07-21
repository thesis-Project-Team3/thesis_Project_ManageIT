import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios'
import './createProject.css';

class CreateProject extends Component {
  constructor(props){
    super(props)
    this.state = {title:"", description:"", date:""};
  }
  
  changehandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }
  
  handlesubmit = e => {
    e.preventDefault()
    console.log(this.state)

  axios.post('http://localhost:3000/project/update', this.state)
    .then(()=>{
      console.log('data sent')
    })
    .catch(()=>{
      console.log('error')
    })
  }
  render() {
    const { title, description, date } = this.state
    return (
      <div>
        <form  >
          <legend className="section_title">Create a New Project</legend>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" value={title} onChange={this.changehandler} />
          <label htmlFor="comments">Project's Description</label>
          <textarea id="comments" name="description" rows="10" value={description} onChange={this.changehandler} ></textarea>
          <label htmlFor="date">Needed Before</label>
          <input id="date" name="date" type="date" value={date} onChange={this.changehandler} />

          <input type="submit" onClick={this.handlesubmit} />
=======
import './createProject.css';
import axios from 'axios';

class CreateProject extends Component {
  state = { title: '', description: '', deadline: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        title: this.title.value,
        description: this.description.value,
        deadline: this.deadline.value,
      },
      () => {
        axios
          .post('http://localhost:5000/project/create', this.state)
          .then((response) => {
            console.log(response.data);
          })

          .catch((err) => console.log('Error', err));
      }
    );
  };

  render() {
    const { title, description, date } = this.state;
    return (
      <div className="create-project">
        <form>
          <legend className="section_title">Create a New Project</legend>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            ref={(c) => (this.title = c)}
          />
          <label htmlFor="comments">Project's Description</label>
          <textarea
            id="comments"
            name="description"
            rows="10"
            ref={(c) => (this.description = c)}
          ></textarea>
          <label htmlFor="date">Needed Before</label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            ref={(c) => (this.deadline = c)}
          />

          <input type="submit" onClick={this.handleSubmit} />
>>>>>>> 9b9c37ebb75061b25e48dd472c9aa969e6a053d1
        </form>
      </div>
    );
  }
}

<<<<<<< HEAD
export default CreateProject;
=======
export default CreateProject;
>>>>>>> 9b9c37ebb75061b25e48dd472c9aa969e6a053d1
