import React from 'react';
import '../src/App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import Calendar from 'react-calendar';
import BookingSystem from './BookingSystem';

import About from './components/About'
import Facilities from './components/Facilities'

import NewsInfo from './components/NewsInfo';



class App extends React.Component{
  render() {
    return(
    <BrowserRouter>
      <div className="all">
      <div className='h1'>
        <h1>Welcome to our booking System</h1>
        </div>
        <div>
        <div className="navNav">
        <Nav/>
        </div>
        <Switch>
          <Route exact path="/" render={()=> <NewsInfo/>}/>
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
            {/* <CardsInfoSystem/> */}
          </Route>
        </Switch>
        </div>
      </div>
    </BrowserRouter>
    )
  }
}
export default App;