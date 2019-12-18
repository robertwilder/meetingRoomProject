import React, { Component } from 'react';
import '../App.css';
import './StyleComponents/Cards.css'


export default function Card (props) {

        let projector = props.projector ? "true" : "false";
        let phone = props.phone ? "true" : "false";
        let wheelchair = props.wheelchair ? "true" : "false";
      

    return(
        <div className="Box">
            <div className="card-body">
             
                <h4 className="card-title">{props.name}</h4>
                
              
                <p className="items" id="people">{props.people} people capacity </p>
               
                <p className="projector" id="projector">Projector: { projector }</p>
               
                <p className="phone" id="phone">On site Telephone: { phone }</p>
          
                <p className="wheelChair" id="wheelchairAccess">Wheelchair Access: { wheelchair }</p>
                
            </div>
        </div>
    )
    };
