import React from "react"
import Table from 'react-bootstrap/Table'

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