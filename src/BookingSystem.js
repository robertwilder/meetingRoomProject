import React, {Component} from 'react';
import DayCalendar from './components/DayCalendar';
// import BookingSpecs from './components/BookingSpecs';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap'
//import DateSystem from './DateSystem';
import './App.css';
import CardsInfo from './components/CardsInfo'

class BookingSystem extends Component{
  state = {

    date: new Date(),
    tableName: [
      {name: "Pink Room"},
      {name: "Blue Room"},
      {name: "Orange Room"}
    ],
    cardInfo: [
      {people:5, projector:"Yes", phone:"No", weelchair:"Yes"},
      {people:10, projector:"No", phone:"Yes", weelchair:"No"},
      {people:2, projector:"No", phone:"Yes", weelchair:"Yes"}
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
            <div className="Pink">
                    <CardsInfo people={this.state.cardInfo[0].people} projector={this.state.cardInfo[0].projector} phone={this.state.cardInfo[0].phone} wheelchair={this.state.cardInfo[0].weelchair}/>
                    </div>
            <div className='secondRow'>
            <DayCalendar name={this.state.tableName[1].name}/>
            </div>
            <div className="Blue" >
            <CardsInfo people={this.state.cardInfo[1].people} projector={this.state.cardInfo[1].projector} phone={this.state.cardInfo[1].phone} wheelchair={this.state.cardInfo[1].weelchair}/>
                    </div>
            <div className='thirdRow'>
            <DayCalendar name={this.state.tableName[2].name}/>
            </div>
            <div className="Orange" >
            <CardsInfo people={this.state.cardInfo[2].people} projector={this.state.cardInfo[2].projector} phone={this.state.cardInfo[2].phone} wheelchair={this.state.cardInfo[0].weelchair}/>
                    </div>
        
        </div>

    )
  }

}
export default BookingSystem;