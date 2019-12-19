import React, {Component} from 'react';
import Card from "./CardsUI";

class Cards extends Component{
    render(){
        return(
            <div className="container-cards">
                <div className="row">
                    <div className="column">
                        <Card colour="Pink" people={5} projector={true} phone={false} wheelchair={true} occupied={false} />
                        <Card colour="Blue" people={10} projector={false} phone={true} wheelchair={false} occupied={false} />
                        <Card colour="Orange" people={2} projector={false} phone={true} wheelchair={true} occupied={false} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;