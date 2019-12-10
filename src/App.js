import React, {Component} from 'react';
import Calendar from 'react-calendar'
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
          {/* <Calender/> */}
          {/* <RoomOne/> */}
          {/* <RoomTwo/> */}
          {/* <RoomThree/> */}
        </div>

    )
  }

}
export default App;
