import React, { Component } from "react";
import "./createProject.css";
import axios from "axios";

class CreateProject extends Component {
  state = { title: "", description: "", deadline: "" };

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
          .post("http://localhost:5000/project/create", this.state)
          .then((response) => {
            console.log(response.data);
          })

          .catch((err) => console.log("Error", err));
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
        </form>
      </div>
    );
  }
}

export default CreateProject;
