// import React, { Component } from "react"
import Table from 'react-bootstrap/Table'
import BookingSpecs from './BookingSpecs'
import React, { Component } from 'react'



export default class DayCalendar extends Component {

    state = {
        BookingSpecs: false,
        clickOn: true,
        currentTime: '',
        showForm: false,
        currentPerson: "",
        currentRoom: "",
        color: "",
        fullName: "",
        meetingName: '',
        numberOfPeople: "",
        duration:'',
        room1: [
            "", //8:00
            "", //8:30
            "", 
            "",
            "",
            "",
            "", //11:00
            "",
            "", //12:00
            "",
            "", //8:00
            "", //8:30
            "",
            "",
            "",
            "",
            "", //16:30
            "", //17:00
        ],
        room2: [
            "", //8:00
            "", //8:30
            "", 
            "",
            "",
            "",
            "", //11:00
            "",
            "", //12:00
            "",
            "", //8:00
            "", //8:30
            "",
            "",
            "",
            "",
            "", //16:30
            "", //17:00
        ],
        room3: [
            "", //8:00
            "", //8:30
            "", 
            "",
            "",
            "",
            "", //11:00
            "",
            "", //12:00
            "",
            "", //8:00
            "", //8:30
            "",
            "",
            "",
            "",
            "", //16:30
            "", //17:00
        ]

    }

    addBookingSpecs = (slotIndex, room) => {
        this.setState({ 
            BookingSpecs: true, 
            clickOn: false, 
            currentTime: slotIndex,
            currentRoom: room,
            // currentTime2: slotIndex, 
            // currentTime3: slotIndex, 
            showForm: true,
            color: "red"
        });
    }

    initialStateHandler = () => {
        this.setState({ BookingSpecs: false, clickOn: true })
    }


    handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event)
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            currentPerson: event.target.value
        })
    
    }

    hideForm = () => {

                                        
        const newRoom = this.state[this.state.currentRoom];

        newRoom[this.state.currentTime] = this.state.currentPerson
    

        this.setState({
            showForm: false,
            [this.state.currentRoom]: newRoom
            
        })
        // console.log("CLICked");
    }
  


    render() {
        console.log("the current Person is", this.state.currentPerson);
        console.log("the current time slot is", this.state.currentTime);
        console.log(this.state.currentTime == 0);
        console.log("the current Person is", this.state.currentRoom);
        // console.log(this.state.currentTime);
        // console.log(this.state.currentTime2);
        

        if (!this.state.showForm) {

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
                            <td >Room 1</td>
                            <td onClick={() => this.addBookingSpecs(0, 'room1')} class={(this.state.currentTime === 0 && this.state.currentRoom === 'room1') ? 'backgroundActive' : ""}>{this.state.room1[0]}</td>
                            <td onClick={() => this.addBookingSpecs(1, 'room1')} class={(this.state.currentTime === 1) ? 'backgroundActive' : ""} >{this.state.room1[1]}</td>
                            <td onClick={() => this.addBookingSpecs(2, 'room1')} class={(this.state.currentTime === 2) ? 'backgroundActive' : ""}>{this.state.room1[2]}</td>
                            <td onClick={() => this.addBookingSpecs(3, 'room1')} class={(this.state.currentTime === 3) ? 'backgroundActive' : ""}>{this.state.room1[3]}</td>
                            <td onClick={() => this.addBookingSpecs(4, 'room1')} class={(this.state.currentTime === 4) ? 'backgroundActive' : ""}>{this.state.room1[4]}</td>
                            <td onClick={() => this.addBookingSpecs(5, 'room1')} class={(this.state.currentTime === 5) ? 'backgroundActive' : ""}>{this.state.room1[5]}</td>
                            <td onClick={() => this.addBookingSpecs(6, 'room1')} class={(this.state.currentTime === 6) ? 'backgroundActive' : ""}>{this.state.room1[6]}</td>
                            <td onClick={() => this.addBookingSpecs(7, 'room1')} class={(this.state.currentTime === 7) ? 'backgroundActive' : ""}>{this.state.room1[7]}</td>
                            <td onClick={() => this.addBookingSpecs(8, 'room1')} class={(this.state.currentTime === 8) ? 'backgroundActive' : ""}>{this.state.room1[8]}</td>
                            <td onClick={() => this.addBookingSpecs(9, 'room1')} class={(this.state.currentTime === 9) ? 'backgroundActive' : ""}>{this.state.room1[9]}</td>
                            <td onClick={() => this.addBookingSpecs(10, 'room1')} class={(this.state.currentTime === 10) ? 'backgroundActive' : ""}>{this.state.room1[10]}</td>
                            <td onClick={() => this.addBookingSpecs(11, 'room1')} class={(this.state.currentTime === 11) ? 'backgroundActive' : ""}>{this.state.room1[11]}</td>
                            <td onClick={() => this.addBookingSpecs(12, 'room1')} class={(this.state.currentTime === 12) ? 'backgroundActive' : ""}>{this.state.room1[12]}</td>
                            <td onClick={() => this.addBookingSpecs(13, 'room1')} class={(this.state.currentTime === 13) ? 'backgroundActive' : ""}>{this.state.room1[13]}</td>
                            <td onClick={() => this.addBookingSpecs(14, 'room1')} class={(this.state.currentTime === 14) ? 'backgroundActive' : ""}>{this.state.room1[14]}</td>
                            <td onClick={() => this.addBookingSpecs(15, 'room1')} class={(this.state.currentTime === 15) ? 'backgroundActive' : ""}>{this.state.room1[15]}</td>
                            <td onClick={() => this.addBookingSpecs(16, 'room1')} class={(this.state.currentTime === 16) ? 'backgroundActive' : ""}>{this.state.room1[16]}</td>
                            <td onClick={() => this.addBookingSpecs(17, 'room1')} class={(this.state.currentTime === 17) ? 'backgroundActive' : ""}>{this.state.room1[17]}</td>
                            <td onClick={() => this.addBookingSpecs(18, 'room1')} class={(this.state.currentTime === 18) ? 'backgroundActive' : ""}>{this.state.room1[18]}</td>
                        </tr>
                        <tr>
                            <td>Room 2</td>
                            <td onClick={() => this.addBookingSpecs(0, 'room2')} class={(this.state.currentTime === 0 && this.state.currentRoom === 'room2') ? 'backgroundActive' : ""}>{this.state.room2[0]}</td>
                            <td onClick={() => this.addBookingSpecs(1, 'room2')} class={(this.state.currentTime === 1) ? 'backgroundActive' : ""}>{this.state.room2[1]}</td>
                            <td onClick={() => this.addBookingSpecs(2, 'room2')} class={(this.state.currentTime === 2) ? 'backgroundActive' : ""}>{this.state.room2[2]}</td>
                            <td onClick={() => this.addBookingSpecs(3, 'room2')} class={(this.state.currentTime === 3) ? 'backgroundActive' : ""}>{this.state.room2[3]}</td>
                            <td onClick={() => this.addBookingSpecs(4, 'room2')} class={(this.state.currentTime === 4) ? 'backgroundActive' : ""}>{this.state.room2[4]}</td>
                            <td onClick={() => this.addBookingSpecs(5, 'room2')} class={(this.state.currentTime === 5) ? 'backgroundActive' : ""}>{this.state.room2[5]}</td>
                            <td onClick={() => this.addBookingSpecs(6, 'room2')} class={(this.state.currentTime === 6) ? 'backgroundActive' : ""}>{this.state.room2[6]}</td>
                            <td onClick={() => this.addBookingSpecs(7, 'room2')} class={(this.state.currentTime === 7) ? 'backgroundActive' : ""}>{this.state.room2[7]}</td>
                            <td onClick={() => this.addBookingSpecs(8, 'room2')} class={(this.state.currentTime === 8) ? 'backgroundActive' : ""}>{this.state.room2[8]}</td>
                            <td onClick={() => this.addBookingSpecs(9, 'room2')} class={(this.state.currentTime === 9) ? 'backgroundActive' : ""}>{this.state.room2[9]}</td>
                            <td onClick={() => this.addBookingSpecs(10, 'room2')} class={(this.state.currentTime === 10) ? 'backgroundActive' : ""}>{this.state.room2[10]}</td>
                            <td onClick={() => this.addBookingSpecs(11, 'room2')} class={(this.state.currentTime === 11) ? 'backgroundActive' : ""}>{this.state.room2[11]}</td>
                            <td onClick={() => this.addBookingSpecs(12, 'room2')} class={(this.state.currentTime === 12) ? 'backgroundActive' : ""}>{this.state.room2[12]}</td>
                            <td onClick={() => this.addBookingSpecs(13, 'room2')} class={(this.state.currentTime === 13) ? 'backgroundActive' : ""}>{this.state.room2[13]}</td>
                            <td onClick={() => this.addBookingSpecs(14, 'room2')} class={(this.state.currentTime === 14) ? 'backgroundActive' : ""}>{this.state.room2[14]}</td>
                            <td onClick={() => this.addBookingSpecs(15, 'room2')} class={(this.state.currentTime === 15) ? 'backgroundActive' : ""}>{this.state.room2[15]}</td>
                            <td onClick={() => this.addBookingSpecs(16, 'room2')} class={(this.state.currentTime === 16) ? 'backgroundActive' : ""}>{this.state.room2[16]}</td>
                            <td onClick={() => this.addBookingSpecs(17, 'room2')} class={(this.state.currentTime === 17) ? 'backgroundActive' : ""}>{this.state.room2[17]}</td>
                            <td onClick={() => this.addBookingSpecs(18, 'room2')} class={(this.state.currentTime === 18) ? 'backgroundActive' : ""}>{this.state.room2[18]}</td>
                        </tr>
                        <tr>
                            <td>Room 3</td>
                            {/* <td colSpan="2">Larry the Bird</td> */}
                            <td onClick={() => this.addBookingSpecs(0, 'room3')} class={(this.state.currentTime === 0 && this.state.currentRoom === 'room3') ? 'backgroundActive' : ""}>{this.state.room3[0]}</td>
                            <td onClick={() => this.addBookingSpecs(1, 'room3')} class={(this.state.currentTime === 1) ? 'backgroundActive' : ""}>{this.state.room3[1]}</td>
                            <td onClick={() => this.addBookingSpecs(2, 'room3')} class={(this.state.currentTime === 2) ? 'backgroundActive' : ""}>{this.state.room3[2]}</td>
                            <td onClick={() => this.addBookingSpecs(3, 'room3')} class={(this.state.currentTime === 3) ? 'backgroundActive' : ""}>{this.state.room3[3]}</td>
                            <td onClick={() => this.addBookingSpecs(4, 'room3')} class={(this.state.currentTime === 4) ? 'backgroundActive' : ""}>{this.state.room3[4]}</td>
                            <td onClick={() => this.addBookingSpecs(5, 'room3')} class={(this.state.currentTime === 5) ? 'backgroundActive' : ""}>{this.state.room3[5]}</td>
                            <td onClick={() => this.addBookingSpecs(6, 'room3')} class={(this.state.currentTime === 6) ? 'backgroundActive' : ""}>{this.state.room3[6]}</td>
                            <td onClick={() => this.addBookingSpecs(7, 'room3')} class={(this.state.currentTime === 7) ? 'backgroundActive' : ""}>{this.state.room3[7]}</td>
                            <td onClick={() => this.addBookingSpecs(8, 'room3')} class={(this.state.currentTime === 8) ? 'backgroundActive' : ""}>{this.state.room3[8]}</td>
                            <td onClick={() => this.addBookingSpecs(9, 'room3')} class={(this.state.currentTime === 9) ? 'backgroundActive' : ""}>{this.state.room3[9]}</td>
                            <td onClick={() => this.addBookingSpecs(10, 'room3')} class={(this.state.currentTime === 10) ? 'backgroundActive' : ""}>{this.state.room3[10]}</td>
                            <td onClick={() => this.addBookingSpecs(11, 'room3')} class={(this.state.currentTime === 11) ? 'backgroundActive' : ""}>{this.state.room3[11]}</td>
                            <td onClick={() => this.addBookingSpecs(12, 'room3')} class={(this.state.currentTime === 12) ? 'backgroundActive' : ""}>{this.state.room3[12]}</td>
                            <td onClick={() => this.addBookingSpecs(13, 'room3')} class={(this.state.currentTime === 13) ? 'backgroundActive' : ""}>{this.state.room3[13]}</td>
                            <td onClick={() => this.addBookingSpecs(14, 'room3')} class={(this.state.currentTime === 14) ? 'backgroundActive' : ""}>{this.state.room3[14]}</td>
                            <td onClick={() => this.addBookingSpecs(15, 'room3')} class={(this.state.currentTime === 15) ? 'backgroundActive' : ""}>{this.state.room3[15]}</td>
                            <td onClick={() => this.addBookingSpecs(16, 'room3')} class={(this.state.currentTime === 16) ? 'backgroundActive' : ""}>{this.state.room3[16]}</td>
                            <td onClick={() => this.addBookingSpecs(17, 'room3')} class={(this.state.currentTime === 17) ? 'backgroundActive' : ""}>{this.state.room3[17]}</td>
                            <td onClick={() => this.addBookingSpecs(18, 'room3')} class={(this.state.currentTime === 18) ? 'backgroundActive' : ""}>{this.state.room3[18]}</td>
                        </tr>
                    </tbody>
                </Table>

            )

        } else {
            // return <BookingSpecs action={this.initialStateHandler} />
            return <BookingSpecs 
                handleInputChange={this.handleInputChange} 
                hideForm = {this.hideForm}
            />
        }

    }

}


// const DayCalendar = () => {
//     return (
//         <Table striped bordered>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>8:00</th>
//             <th>8:30</th>
//             <th>9:00</th>
//             <th>9:30</th>
//             <th>10:00</th>
//             <th>10:30</th>
//             <th>11:00</th>
//             <th>11:30</th>
//             <th>12:00</th>
//             <th>12:30</th>
//             <th>13:00</th>
//             <th>13:30</th>
//             <th>14:00</th>
//             <th>14:30</th>
//             <th>15:00</th>
//             <th>15:30</th>
//             <th>16:00</th>
//             <th>16:30</th>
//             <th>17:00</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td >1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Jacob</td>
//             <td>Thorn</td>
//             <td>@fat</td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//           <tr>
//             <td>3</td>
//             {/* <td colSpan="2">Larry the Bird</td> */}
//             <td></td>
//             <td>@twitter</td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//         </tbody>
//       </Table>

//     )
// }

// export default DayCalendar


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