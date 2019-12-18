import React, {Component} from 'react';
import Calendar from 'react-calendar';
import DayCalendar from './components/DayCalendar';
// import BookingSpecs from './components/BookingSpecs';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap'
//import DateSystem from './DateSystem';
import './App.css';

class App extends Component{
  state = {

    date: new Date(),
    tableName: [
      {name: "Room 1"},
      {name: "Room 2"},
      {name: "Room 3"}
    ]
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
            <div className='firstRow'>
            <DayCalendar name={this.state.tableName[0].name}/>
            </div>
            <div className='secondRow'>
            <DayCalendar name={this.state.tableName[1].name}/>
            </div>
            <div className='thirdRow'>
            <DayCalendar name={this.state.tableName[2].name}/>
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
