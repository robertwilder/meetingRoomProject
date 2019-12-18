import React, { Component } from "react"
import DayCalendar from './DayCalendar'

export default class Form extends Component {

  state = {
    button : false,
    fullName : ""
  }
 
 
  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log(data)
  }
  handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})

  }
  

  render() {
    const {fullName} = this.state

    if (this.state.button === true) {

      return <div>
      <form onSubmit={this.handleSubmit}>
       <h1>Hello</h1>
       <p>Enter your name: {fullName}</p>
       <input
         type="text" placeholder="Your Name" name="fullName" onChange={this.handleInputChange}
       />
       {/* <p>Name of the meeting:</p>
        <input
         type="text"
       />
       <p>Number of people:</p>
        <input
         type="text"
       />
       <p>Duration:</p>
        <input
         type="text"
       /> */}
      </form>
      <button onClick={this.addDayCalendar} >Confirm</button>
      </div>

    } else {
    
      return <div style={{ backgroundColor: this.state.color }} 
      ><DayCalendar action={this.initialStateHandler}/>
      </div>
    }
  }
}