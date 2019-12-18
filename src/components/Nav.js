import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return(
        <div>
        
            <Link to="/about">About</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/bookingSystem">BookingSystem</Link>
            <Link to="/facilities">Facilities</Link>
        </div>
    )
}