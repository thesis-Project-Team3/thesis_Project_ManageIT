import React, { Component } from 'react';
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

  axios.post('http://localhost:3000/', this.state)
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
        </form>
      </div>
    );
  }
}

export default CreateProject;