import React from 'react'
import {Link} from "react-router-dom"
import './StyleComponents/Nav.css'

export default function Nav() {
    return(
        <div className="navBar">
            <div>
            <Link to="/" className="Link">Home</Link>
            </div>
            <div>
            <Link to="/about" className="Link">About</Link>
            </div>
            <div>
            <Link to="/calendar" className="Link">Calendar</Link>
            </div>
            <div>
            <Link to="/bookingSystem" className="Link">BookingSystem</Link>
            </div>
            <div>
            <Link to="/facilities" className="Link">Facilities</Link>
            </div>
        </div>
    )
}
