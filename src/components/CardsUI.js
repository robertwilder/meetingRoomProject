import React, { Component } from 'react';
import '../App.css';


export default function Card (props) {

        let projector = props.projector ? "true" : "false";
        let phone = props.phone ? "true" : "false";
        let wheelchair = props.wheelchair ? "true" : "false";
        let occupied = props.occupied ? "true" : "false";

    return(
        <div style={{backgroundColor: props.colour}} className="card text-center">
            <div className="card-body">
                <h4 className="card-title"></h4>
                <p className="items" id="people">{props.people} people </p>
                <p className="projector" id="projector">{ projector }</p>
                <p className="phone" id="phone">{ phone }</p>
                <p className="wheelChair" id="wheelchairAccess">{ wheelchair }</p>
               
            </div>
            </div>
    )
    };
