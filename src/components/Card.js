import React from 'react';
import '../css/Card.css';

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <p className="card__subject">{this.props.details.subject}</p>
                <p className="card__body">{this.props.details.body}</p>
            </div>
        )
    }
}

export default Card;
