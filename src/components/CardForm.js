import React from 'react';

class CardForm extends React.Component {
    constructor() {
        super();

        this.createCard = this.createCard.bind(this);
        this.hideCardForm = this.hideCardForm.bind(this);
    }

    createCard(event) {
        event.preventDefault();

        const card = {
            subject: this.subject.value,
            body: this.body.value
        };

        this.props.addCard(card);
        this.cardForm.reset();
    }

    hideCardForm() {
        this.cardForm.reset();
        this.props.hideCardForm();
    }

    render() {
        return (
            <form ref={(input) => this.cardForm = input} className="card__edit" onSubmit={this.createCard}>
                <input ref={(input) => this.subject = input} type="text" placeholder="Task" />
                <textarea ref={(input) => this.body = input} placeholder="Notes"></textarea>
                <button type="submit">+ Add Task</button>
                <span className="card__edit--cancel" onClick={this.hideCardForm}>cancel</span>
            </form>
        )
    }
}

export default CardForm;
