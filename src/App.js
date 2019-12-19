import React from 'react';
import '../src/App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import Calendar from 'react-calendar';
import BookingSystem from './BookingSystem';
import Cards from './components/Cards'
import CardsInfoSystem from './CardsInfoSystem';

class App extends React.Component{
  render() {
    return(
    <BrowserRouter>
      <div className="all">
        <h1>Welcome to our booking System</h1>
        <div>
        <Nav/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/calendar">
          <div className="calendar">
            <Calendar />
          </div>
          </Route>
          <Route path="/bookingSystem">
            <BookingSystem/>
          </Route>
          <Route path="/facilities">
            <CardsInfoSystem/>
          </Route>
        </Switch>
        </div>
      </div>
    </BrowserRouter>
    )
  }
}
export default App;