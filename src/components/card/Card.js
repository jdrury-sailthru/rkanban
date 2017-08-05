import React from 'react';
import '../../css/Card.css';

class Card extends React.Component {
    constructor() {
        super();

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    
    handleMouseDown(e) {
        this.mouseDown = true;
        this.props.floatCard(e, this.props.id);
    }

    handleMouseUp(e) {
        this.mouseDown = false;
        this.props.placeCardInNearestLane(e, this.props.id);
    }

    handleMouseMove(e) {
        if (this.mouseDown) {
            this.props.floatCard({top: e.clientY, left: e.clientX});

        }
    }

    render() {
        return (
            <div className="card" 
                 style={this.props.details.style}
                 onMouseDown={this.handleMouseDown}
                 onMouseUp={this.handleMouseUp}
                 onMouseMove={this.handleMouseMove}>

                <p className="card__subject">{this.props.details.subject}</p>
                <p className="card__body">{this.props.details.body}</p>

            </div>
        )
    }
}

export default Card;
