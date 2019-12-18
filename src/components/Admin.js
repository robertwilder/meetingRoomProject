// import React, { Component } from 'react';
// import Form from './Form'
// import DayCalendar from './DayCalendar'

// export default class Admin extends Component {

//     state = {
//         dayCalendar: true,
//         button: false,
//         form: false,
//         clickOn: true,
//     }

//     addDayCalendar = () => {
//         this.setState({ dayCalendar: false, button: true })
//     }
//     calendarStateHandler = () => {
//         this.setState({ dayCalendar: true, button: false })
//     }

//     addForm = () => {
//         this.setState({ form: true, clickOn: false })
//     }

//     formStateHandler = () => {
//         this.setState({ form: false, clickOn: true })
//     }

//     render() {
//         if (this.state.dayCalendar === true && this.state.button === false) {
//             return <div>
//             <DayCalendar />
//         </div>

//     } else {
//     return <Form />
// }
// }
// }
