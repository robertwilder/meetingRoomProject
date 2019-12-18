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
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, //8:00
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, //8:30
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            },  //11:00
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            },  //12:00
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            },  //13:00
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            },  //13:30
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            }, 
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            },  //16:30
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            },  //17:00
            {
                fullName: "",
                meetingName: "",
                numberOfPeople: "",
                duration: ""
            },  //17:00
        ]


    }

    addBookingSpecs = (slotIndex, room) => {
        this.setState({ 
            BookingSpecs: true, 
            clickOn: false, 
            currentTime: slotIndex,
            currentRoom: room,
            showForm: true,
            
        });
    }

    initialStateHandler = () => {
        this.setState({ BookingSpecs: false, clickOn: true })
    }


    handleInputChange = (event) => {

        event.preventDefault()
        // const value = event.target.value
       
        // console.log(event)
        // console.log(event.target.name)
        // console.log(event.target.value)

        
        this.setState({

            [event.target.name] : event.target.value,
        
            // currentPerson: event.target.value,
        })
        
    }
    //handle inputchange
    hideForm = () => {

                                        
        const newRoom = this.state[this.state.currentRoom];

        // newRoom[this.state.currentTime] = this.state.currentPerson;

        newRoom[this.state.currentTime].fullName = this.state.fullName;
        newRoom[this.state.currentTime].meetingName = this.state.meetingName;
        newRoom[this.state.currentTime].numberOfPeople = this.state.numberOfPeople;
        newRoom[this.state.currentTime].duration = this.state.duration;
    

        this.setState({
            showForm: false,
            [this.state.currentRoom]: newRoom
            
        })
        
        // console.log("CLICked");
    }
  


    render() {

      
        if (!this.state.showForm) {

            // const inputStyle = {
            //     backgroundColor : ''
            // }
            // if { this.state.fullName.lenght > 1} (
            //     inputStyle = {
            //         backgroundColor: 'red'
            //     }
            // )

            return (
                <Table striped bordered className='table'>
                    <thead>
                        <tr className="times">
                            <th>Time</th>
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
                        <tr className="room1">
                            <td>{this.props.name}</td>
                            <td onClick={() => this.addBookingSpecs(0, 'room1')} class={(this.state.room1[0].fullName !== "") ? 'backgroundActive' : ""}>
                            
                            
                            <ul>
                                <li>{this.state.room1[0].fullName}</li>
                                <li>{this.state.room1[0].meetingName}</li>
                                <li>{this.state.room1[0].numberOfPeople}</li>
                                <li>{this.state.room1[0].duration}</li>
                            </ul>
                            
                            </td>
                            <td onClick={() => this.addBookingSpecs(1, 'room1')} class={(this.state.room1[1].fullName !== "") ? 'backgroundActive' : ""} >
                            <ul>
                                <li>{this.state.room1[1].fullName}</li>
                                <li>{this.state.room1[1].meetingName}</li>
                                <li>{this.state.room1[1].numberOfPeople}</li>
                                <li>{this.state.room1[1].duration}</li>
                            </ul>
                            </td>
                            <td onClick={() => this.addBookingSpecs(2, 'room1')} class={(this.state.room1[2].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[2].fullName}</li>
                                <li>{this.state.room1[2].meetingName}</li>
                                <li>{this.state.room1[2].numberOfPeople}</li>
                                <li>{this.state.room1[2].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(3, 'room1')} class={(this.state.room1[3].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[3].fullName}</li>
                                <li>{this.state.room1[3].meetingName}</li>
                                <li>{this.state.room1[3].numberOfPeople}</li>
                                <li>{this.state.room1[3].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(4, 'room1')} class={(this.state.room1[4].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[4].fullName}</li>
                                <li>{this.state.room1[4].meetingName}</li>
                                <li>{this.state.room1[4].numberOfPeople}</li>
                                <li>{this.state.room1[4].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(5, 'room1')} class={(this.state.room1[5].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[5].fullName}</li>
                                <li>{this.state.room1[5].meetingName}</li>
                                <li>{this.state.room1[5].numberOfPeople}</li>
                                <li>{this.state.room1[5].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(6, 'room1')} class={(this.state.room1[6].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[6].fullName}</li>
                                <li>{this.state.room1[6].meetingName}</li>
                                <li>{this.state.room1[6].numberOfPeople}</li>
                                <li>{this.state.room1[6].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(7, 'room1')} class={(this.state.room1[7].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[7].fullName}</li>
                                <li>{this.state.room1[7].meetingName}</li>
                                <li>{this.state.room1[7].numberOfPeople}</li>
                                <li>{this.state.room1[7].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(8, 'room1')} class={(this.state.room1[8].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[8].fullName}</li>
                                <li>{this.state.room1[8].meetingName}</li>
                                <li>{this.state.room1[8].numberOfPeople}</li>
                                <li>{this.state.room1[8].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(9, 'room1')} class={(this.state.room1[9].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[9].fullName}</li>
                                <li>{this.state.room1[9].meetingName}</li>
                                <li>{this.state.room1[9].numberOfPeople}</li>
                                <li>{this.state.room1[9].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(10, 'room1')} class={(this.state.room1[10].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[10].fullName}</li>
                                <li>{this.state.room1[10].meetingName}</li>
                                <li>{this.state.room1[10].numberOfPeople}</li>
                                <li>{this.state.room1[10].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(11, 'room1')} class={(this.state.room1[11].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[11].fullName}</li>
                                <li>{this.state.room1[11].meetingName}</li>
                                <li>{this.state.room1[11].numberOfPeople}</li>
                                <li>{this.state.room1[11].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(12, 'room1')} class={(this.state.room1[12].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[12].fullName}</li>
                                <li>{this.state.room1[12].meetingName}</li>
                                <li>{this.state.room1[12].numberOfPeople}</li>
                                <li>{this.state.room1[12].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(13, 'room1')} class={(this.state.room1[13].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[13].fullName}</li>
                                <li>{this.state.room1[13].meetingName}</li>
                                <li>{this.state.room1[13].numberOfPeople}</li>
                                <li>{this.state.room1[13].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(14, 'room1')} class={(this.state.room1[14].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[14].fullName}</li>
                                <li>{this.state.room1[14].meetingName}</li>
                                <li>{this.state.room1[14].numberOfPeople}</li>
                                <li>{this.state.room1[14].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(15, 'room1')} class={(this.state.room1[15].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[15].fullName}</li>
                                <li>{this.state.room1[15].meetingName}</li>
                                <li>{this.state.room1[15].numberOfPeople}</li>
                                <li>{this.state.room1[15].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(16, 'room1')} class={(this.state.room1[16].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[16].fullName}</li>
                                <li>{this.state.room1[16].meetingName}</li>
                                <li>{this.state.room1[16].numberOfPeople}</li>
                                <li>{this.state.room1[16].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(17, 'room1')} class={(this.state.room1[17].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[17].fullName}</li>
                                <li>{this.state.room1[17].meetingName}</li>
                                <li>{this.state.room1[17].numberOfPeople}</li>
                                <li>{this.state.room1[17].duration}</li>
                            </ul></td>
                            <td onClick={() => this.addBookingSpecs(18, 'room1')} class={(this.state.room1[18].fullName !== "") ? 'backgroundActive' : ""}>
                            <ul>
                                <li>{this.state.room1[18].fullName}</li>
                                <li>{this.state.room1[18].meetingName}</li>
                                <li>{this.state.room1[18].numberOfPeople}</li>
                                <li>{this.state.room1[18].duration}</li>
                            </ul></td>
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
