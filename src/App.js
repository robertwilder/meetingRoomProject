import React from 'react';
import '../src/App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import Calendar from 'react-calendar';
import BookingSystem from './BookingSystem';
import Cards from './components/Cards'
import About from './components/About'
import Facilities from './components/Facilities'

class App extends React.Component{
  render() {
    return(
    <BrowserRouter>
      <div className="all">
        <h1>Welcome to our booking System</h1>
        <Nav/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/about">
              <About/>
          </Route>
          <Route path="/calendar">
          <div className="calendar">
            <Calendar />
          </div>
          </Route>
          <Route path="/bookingSystem">
            <BookingSystem/>
          </Route>
          <Route path="/facilities">
            <Facilities/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}
export default App;