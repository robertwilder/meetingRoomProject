import React, { Component } from "react"
import DayCalendar from './DayCalendar'

export default class BookingSpecs extends Component {

  

  render() {


      return <div>
<<<<<<< HEAD
      <form className='form' onSubmit={this.handleSubmit}>
       <h1>Hello! Let us know some details</h1>
       <p></p>
       <div className='input1' >
       <input
      //  value={fullName}   style={inputStyle} 
         type="text" placeholder="Your full name:" name="fullName" value={this.props.fullname}  onChange={this.props.handleInputChange}
       />
       </div>
       <p></p>
        <input
         type="text" placeholder='Name of the meeting:' name="meetingName" value={this.props.meetingName}  onChange={this.props.handleInputChange}
       />
       <p></p>
        <input
         type="text" placeholder='Number of people:' name="numberOfPeople" value={this.props.numberOfPeople}  onChange={this.props.handleInputChange}
       />
       <p></p>
        <input
         type="text" placeholder='Duration:' name="duration" value={this.props.duration}  onChange={this.props.handleInputChange}
       />

      </form>
      <button onClick={this.props.hideForm} style={{backgroundColor: "gray"}}>Confirm</button>
=======
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
>>>>>>> da2e7e144ca0b3dab56eb1dd28a900ad9d65bc5c
      </div>
    }
  
  }
<<<<<<< HEAD
=======


>>>>>>> da2e7e144ca0b3dab56eb1dd28a900ad9d65bc5c
