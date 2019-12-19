import React, { Component } from 'react'
import './StyleComponents/Cards.css'
import '../App.css'


export default class CardsInfo extends Component {
    render() {
        return (
            <div className="Box">
            <div className="card-body">
             
                {/* <h5 className="card-title">{this.props.name}</h5> */}
                
              
                <p className="items" id="people">People capacity: {this.props.people} </p>
               
                <p className="projector" id="projector">Projector: { this.props.projector }</p>
               
                <p className="phone" id="phone">On site Telephone: { this.props.phone }</p>
          
                <p className="wheelChair" id="wheelchairAccess">Wheelchair Access: { this.props.wheelchair }</p>
                
            </div>
        </div>
        )
    }
}
