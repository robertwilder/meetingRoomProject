import React, { Component } from "react"
import DayCalendar from './DayCalendar'

export default class BookingSpecs extends Component {

  

  render() {


      return <div>
      <form onSubmit={this.handleSubmit}>
       <h1>Hello</h1>
       <p>Enter your full name:</p>
       <input
      //  value={fullName}
         type="text" placeholder="Your full name" name="fullName" value={this.props.fullname}  onChange={this.props.handleInputChange}
       />
       <p>Name of the meeting:</p>
        <input
         type="text" name="meetingName" value={this.props.meetingName}  onChange={this.props.handleInputChange}
       />
       <p>Number of people:</p>
        <input
         type="text" name="numberOfPeople" value={this.props.numberOfPeople}  onChange={this.props.handleInputChange}
       />
       <p>Duration:</p>
        <input
         type="text" name="duration" value={this.props.duration}  onChange={this.props.handleInputChange}
       />
      </form>
      <button onClick={this.props.hideForm} >Confirm</button>
      </div>
    }
  
  }


