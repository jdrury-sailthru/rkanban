import React from 'react';
import Lane from './lane/Lane';
import LaneStub from './lane/LaneStub';

import '../css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.renderLane = this.renderLane.bind(this);
    this.createLane = this.createLane.bind(this);
    this.addCardToLane = this.addCardToLane.bind(this);
    this.showCardForm = this.showCardForm.bind(this);
    this.hideCardForm = this.hideCardForm.bind(this);
    this.updateCardPositions = this.updateCardPositions.bind(this);
    this.placeCardInNearestLane = this.placeCardInNearestLane.bind(this);

    this.state = {
      styles: {},
      lanes: {},
      laneOrder: []
    }
  }

  componentWillMount() {
    this.loadSamples();
  }

  loadSamples() {
    const lanes = {
      'lane-1': {
        name: 'Lane 1',
        id: 'lane-1',
        cards: [{
            subject: "do dishes",
            body: "do all the dishes before wife comes home"
          },
          {
            subject: "return library book",
            body: "go to grand central library and return The Shining"
          }
        ]
      }
    };

    this.setState({ lanes });
  }

  addCardToLane(id, card) {
    const lanes = {...this.state.lanes};
    const lane = lanes[id];
    lane.cards.push(card);
    lane.showCardForm = false;
    this.setState({ lanes });
  }

  showCardForm(id) {
    const lanes = {...this.state.lanes};
    const lane = lanes[id];
    lane.showCardForm = true;
    this.setState({ lanes });
  }

  hideCardForm(id) {
    const lanes = {...this.state.lanes};
    const lane = lanes[id];
    lane.showCardForm = false;
    this.setState({ lanes });
  }

  createLane() {
    const lanes = {...this.state.lanes};
    const timestamp = Date.now();
    const id = `lane-${timestamp}`;

    lanes[id] = {
      id,
      name: `Lane ${Object.keys(lanes).length + 1}`,
      cards: []
    }

    this.setState({ lanes });
  }

  updateCardPositions(id, style) {
    const styles = {...this.state.styles};
    styles[id] = style;
    this.setState({ styles });
  }

  placeCardInNearestLane(id) {
    const styles = {...this.state.styles};
    styles[id] = { position: 'static' };
    this.setState({ styles });
  }

  render() {
    return (
      <div className="App">
        {
          Object
            .keys(this.state.lanes)
            .map(this.renderLane)
        }
        <LaneStub createLane={this.createLane} />
      </div>
    );
  }

  renderLane(key, i) {
    const lane = this.state.lanes[key];
    return <Lane 
              key={lane.id}
              id={lane.id}
              details={lane} 
              styles={this.state.styles}
              placeCardInNearestLane={this.placeCardInNearestLane}
              updateCardPositions={this.updateCardPositions}
              addCardToLane={this.addCardToLane} 
              showCardForm={this.showCardForm} 
              hideCardForm={this.hideCardForm} 
              />
  }
}

export default App;
