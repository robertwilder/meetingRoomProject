import React, {Component} from 'react';
import Calendar from 'react-calendar';
import DayCalendar from './components/DayCalendar';
// import BookingSpecs from './components/BookingSpecs';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap'
//import DateSystem from './DateSystem';

class App extends Component{
  state = {
    date: new Date(),
  }

  onChange = (date) => {
    this.setState({date})
    console.log(date)
  }

  render(){

    return(

    
      <div className="App">
        <h1>Welcome to our booking System</h1>
          <div>
            {/* this need review  */}
              <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                />
            </div>
            <div>
            <DayCalendar/>
            </div>
            
            <div>
            {/* <BookingSpecs/> */}
            </div>
          {/* <Calender/> */}
          {/* <RoomOne/> */}
          {/* <RoomTwo/> */}
          {/* <RoomThree/> */}
        </div>

    )
  }

}
export default App;
