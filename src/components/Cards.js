import React, {Component} from 'react';
import Card from "./CardsUI";
import './StyleComponents/Cards.css'

class Cards extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="column">
                        <div>
                        <Card className="Pink" people={5} projector={true} phone={false} wheelchair={true} occupied={false} />
                        </div>
                        <div>
                        <Card className="Blue" people={10} projector={false} phone={true} wheelchair={false} occupied={false} />
                        </div>
                        <div>
                        <Card className="Orange" people={2} projector={false} phone={true} wheelchair={true} occupied={false} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;