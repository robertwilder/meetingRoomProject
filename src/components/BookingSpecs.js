import React, { Component } from "react"
import DayCalendar from './DayCalendar'

export default class BookingSpecs extends Component {

  state = {
    dayCalendar : false,
    button : true,
    color : 'yellow',
    colorTrue : false
  }
  // onChange = () => {
  //   this.setState({ color : 'red'})
  // }
  addDayCalendar = () => {
    this.setState({dayCalendar : true, button : false, colorTrue : true})
  }
  initialStateHandler = () => {
    this.setState({dayCalendar : false, button : true, colorTrue : false})
  }
  render() {
    if (this.state.button === true) {


      return <div>
      <form>
       <h1>Hello</h1>
       <p>Enter your name:</p>
       <input
         type="text"
       />
       <p>Name of the meeting:</p>
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
       />
      </form>
      <button onClick={this.addDayCalendar}>Confirm</button>
      </div>

    } else {
    
      return <div style={{ backgroundColor: this.state.color }} 
      ><DayCalendar action={this.initialStateHandler}/>
      </div>
    }
  }


}

// for the color change
{/* <div style={{ backgroundColor: this.state.color }} 
onClick={this.onChange}
> </div> */}


// const BookingSpecs = () => {
//     return (
// <div>
// <form>
//  <h1>Hello</h1>
//  <p>Enter your name:</p>
//  <input
//    type="text"
//  />
//  <p>Name of the meeting:</p>
//   <input
//    type="text"
//  />
//  <p>Number of people:</p>
//   <input
//    type="text"
//  />
//  <p>Duration:</p>
//   <input
//    type="text"
//  />
// </form>
// <button>Confirm</button>
// </div>
//     )
// }
// export default BookingSpecs


// const BookingSpecs = () => {
//   return (
// <div>
// <form>
// <h1>Hello</h1>
// <p>Enter your name:</p>
// <input
//  type="text"
// />
// <p>Name of the meeting:</p>
// <input
//  type="text"
// />
// <p>Number of people:</p>
// <input
//  type="text"
// />
// <p>Duration:</p>
// <input
//  type="text"
// />
// </form>
// <button>Confirm</button>
// </div>
//   )
// }