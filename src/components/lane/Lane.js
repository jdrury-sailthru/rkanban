import React from 'react';
import Card from '../card/Card';
import EditCardForm from '../card/EditCardForm';
import CardStub from '../card/CardStub';
import EditLaneForm from './EditLaneForm';

import '../../css/Lane.css';

class Lane extends React.Component {
	constructor() {
		super();

		this.addCard = this.addCard.bind(this);
		this.showCardForm = this.showCardForm.bind(this);
		this.hideCardForm = this.hideCardForm.bind(this);
		this.floatCard = this.floatCard.bind(this);
		this.renderCard = this.renderCard.bind(this);
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

	floatCard(e, id) {
		this.props.updateCardPositions(id, { 
			position: 'absolute', 
			left: e.clientX - 125, 
			top: e.clientY - 40,
			'box-shadow': '1px 1px 10px rgba(0,0,0,.25)'
		});
	}

	placeCardInNearestLane(e, id) {
		this.props.placeCardInNearestLane(id, e);
	}

	render() {
		const cards = this.props.details.cards;

		let cardCTA;
		let laneHeader;

		if (this.props.details.showCardForm) {
			cardCTA = this.renderCardForm();
		} else {
			cardCTA = this.renderCardStub();
		}

		if (this.showEditLaneForm) {
			laneHeader = this.renderEditLaneForm();
		} else {
			laneHeader = this.renderLaneTitle();
		}

		return (
			<div className="lane">
				{laneHeader}

				{cards.map(this.renderCard)}

				{cardCTA}
			</div>
		);
	}

	renderEditLaneForm() {
		return <EditLaneForm onSave={this.saveLaneTitle} />
	}

	saveLaneTitle() {
//		this.props.details.name
	}

	renderLaneTitle() {
		return <p onClick={() => this.showEditLaneForm = true} className="lane__title">{this.props.details.name}</p>
	}

	renderCard(card, i) {
		card.style = this.props.styles[i];

		return (
			<Card 
				key={i} 
				id={i} 
				floatCard={this.floatCard}
				details={card} />
		);
	}

	renderCardForm() {
		return (
			<EditCardForm 
				addCard={this.addCard}
				hideCardForm={this.hideCardForm} />
		);
	}

	renderCardStub() {
		return (
			<CardStub showCardForm={this.showCardForm} />
		);
	}
}

export default Lane;
