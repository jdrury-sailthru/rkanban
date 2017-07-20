import React from 'react';
import Card from './Card';
import CardForm from './CardForm';
import CardStub from './CardStub';

import '../css/Lane.css';

class Lane extends React.Component {
	constructor() {
		super();

		this.addCard = this.addCard.bind(this);
		this.showCardForm = this.showCardForm.bind(this);
		this.hideCardForm = this.hideCardForm.bind(this);
	}

	renderCard(card, i) {
		return <Card key={i} details={card} />
	}

	addCard(card) {
		this.props.addCardToLane(this.props.id, card);
	}

	showCardForm() {
		this.props.showCardForm(this.props.id);
	}

	hideCardForm() {
		this.props.hideCardForm(this.props.id);
	}

	render() {
		let cardCTA;

		if (this.props.details.showCardForm) {
			cardCTA = <CardForm addCard={this.addCard} hideCardForm={this.hideCardForm}/>
		} else {
			cardCTA = <CardStub showCardForm={this.showCardForm} />
		}

		return (
			<div className="lane">
				<p className="lane__title">{this.props.details.name}</p>
				{
					this.props.details.cards.map(this.renderCard)
				}
				{cardCTA}
			</div>
		);
	}
}

export default Lane;
