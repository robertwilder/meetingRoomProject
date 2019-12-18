
import React from 'react';
import '../src/App.css';
import BookingSystem from './BookingSystem'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Calendar from 'react-calendar';
import Nav from './components/Nav'
import Cards from './components/Cards'

class App extends React.Component{
  render() {
    return(
      <div>
      <h1>Welcome to our Booking System</h1>
      <BrowserRouter>
        <div>
        <Nav/>
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/about">
{/* create an about Page  */}
            </Route>
            <Route path="/calendar">
              <Calendar/>
            </Route>
            <Route path="/bookingsystem">
              <BookingSystem/>
            </Route>
            <Route path="/facilities">
              <Cards/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}
export default App;