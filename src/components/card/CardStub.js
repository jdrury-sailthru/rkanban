import React from 'react';

class CardForm extends React.Component {
    render() {
        return (
            <div className="card card--stub"
                onClick={() => this.props.showCardForm()}>
                + create new task
            </div>
        )
    }
}

export default CardForm;
