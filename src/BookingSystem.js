import React, {Component} from 'react';
import DayCalendar from './components/DayCalendar';
// import BookingSpecs from './components/BookingSpecs';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap'
//import DateSystem from './DateSystem';
import './App.css';

class BookingSystem extends Component{
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
         
            <div className='firstRow'>
            <DayCalendar name={this.state.tableName[0].name}/>
            </div>
            <div className='secondRow'>
            <DayCalendar name={this.state.tableName[1].name}/>
            </div>
            <div className='thirdRow'>
            <DayCalendar name={this.state.tableName[2].name}/>
            </div>
        
        </div>

    )
  }

}
export default BookingSystem;