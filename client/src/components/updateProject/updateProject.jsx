import React, { Component } from 'react';
import './updateProject.css';

class UpdateProject extends Component {
<<<<<<< HEAD
  constructor(props){
    super(props)
  }
  state = {};
  render() {
    return (
      <div>
=======
  state = {};
  render() {
    return (
      <div className="update-project">
>>>>>>> 9b9c37ebb75061b25e48dd472c9aa969e6a053d1
        <form>
          <legend className="section_title">
            Add a Feature to an Existing Project
          </legend>

          <label htmlFor="title">Choose a Project</label>
          <select id="select" name="title">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>

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

<<<<<<< HEAD
export default UpdateProject;
=======
export default UpdateProject;
>>>>>>> 9b9c37ebb75061b25e48dd472c9aa969e6a053d1
