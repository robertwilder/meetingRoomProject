import React from "react"
import Table from 'react-bootstrap/Table'


// const DayCalendar = () => {
    
//     let interval = 30; //minutes interval
//     let times = []; // time array
//     let startTime = 480; // start time
//     //loop to increment the time and push results in array
//     for (let i=0;startTime<17.5*60; i++) {
//       let hh = Math.floor(startTime/60); // gestartTimeing hours of day in 0-24 format
//       let mm = (startTime%60); // gestartTimeing minutes of the hour in 0-55 format
//       startTime = startTime + interval;
//       times.push(hh + ':' + mm)
//       console.log(startTime[1])
//     }
//     return (<div>
//         {times.map((time) => {

//         })}
//         </div>

//     )
    
    

// }







const DayCalendar = () => {
    return (
        <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>8:00</th>
            <th>8:30</th>
            <th>9:00</th>
            <th>9:30</th>
            <th>10:00</th>
            <th>10:30</th>
            <th>11:00</th>
            <th>11:30</th>
            <th>12:00</th>
            <th>12:30</th>
            <th>13:00</th>
            <th>13:30</th>
            <th>14:00</th>
            <th>14:30</th>
            <th>15:00</th>
            <th>15:30</th>
            <th>16:00</th>
            <th>16:30</th>
            <th>17:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thorn</td>
            <td>@fat</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            {/* <td colSpan="2">Larry the Bird</td> */}
            <td></td>
            <td>@twitter</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
   
    )
}

export default DayCalendar


// import React, { Component } from 'react'

// export default class LocationList extends Component {
//     state= {
//         locationsList: [
//             {Code: "1234", 
//             Name: ""}
//         ]
//     }

//     render() {
//         const locations = this.state.locationsList

//         let mapLocations = locations.map(place =>
//             <tr key = {place.LocationCode}>
//             <td>{place.LocationCode}</td>
//             <td>{place.Site}</td>
//             <td>{place.FullName}</td>
//             <td>{place.InUse.toString()}</td>
//             </tr>
//         )

//         return (
//             <div>
//                 <table className="table table-striped table-dark">
//   <thead>
//     <tr>
//       <th scope="col">Code</th>
//       <th scope="col">Site</th>
//       <th scope="col">Full Name</th>
//       <th scope="col">In Use</th>
//     </tr>
//   </thead>
//   <tbody>
//   {mapLocations}

//   </tbody>
// </table>
//             </div>
//         )
//     }
// }