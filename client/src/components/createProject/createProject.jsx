import React, { Component } from 'react';
import './createProject.css';

class CreateProject extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <legend className="section_title">Create a New Project</legend>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" />
          <label htmlFor="comments">Project's Description</label>
          <textarea id="comments" name="textarea" rows="10"></textarea>
          <label htmlFor="date">Needed Before</label>
          <input id="date" name="date" type="date" />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateProject;