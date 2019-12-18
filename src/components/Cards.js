import React, {Component} from 'react';
import Card from "./CardsUI";
import './StyleComponents/Cards.css'

class Cards extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="column">
                        <div className="Pink">
                        <Card  name={'Room 1'} people={5} projector={true} phone={false} wheelchair={true} occupied={false} />
                        </div>
                        <div className="Blue" >
                        <Card  name={'Room 2'} people={10} projector={false} phone={true} wheelchair={false} occupied={false} />
                        </div>
                        <div className="Orange">
                        <Card  name={'Room 3'} people={2} projector={false} phone={true} wheelchair={true} occupied={false} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;