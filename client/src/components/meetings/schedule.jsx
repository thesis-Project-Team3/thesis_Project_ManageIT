import React, { Component } from 'react';


class Meetings extends Component {
    state = {}
    render() { 
        return (<div>
            <form>
            <legend className="section_title">
            Schedule a new meeting
          </legend>
          <label htmlFor="employee">employee name</label>
          <select id="select" name="employee">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
          <label htmlFor="subject">Meeting Subject</label>
          <input id="subject" type="text" name="subject" />
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" />
          <input type="submit" />
            </form>
        </div>);
    }
}
 
export default Meetings;