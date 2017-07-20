import React from 'react';
import Lane from './Lane';
import LaneForm from './LaneForm';

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

    this.state = {
      lanes: {},
      laneOrder: []
    }
  }

  componentWillMount() {
    this.localStorage
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

  renderLane(key, i) {
    const lane = this.state.lanes[key];
    return <Lane 
              key={lane.id}
              id={lane.id}
              details={lane} 
              addCardToLane={this.addCardToLane} 
              showCardForm={this.showCardForm} 
              hideCardForm={this.hideCardForm} 
              />
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

  render() {
    return (
      <div className="App">
        {
          Object
            .keys(this.state.lanes)
            .map(this.renderLane)
        }
        <LaneForm createLane={this.createLane} />
      </div>
    );
  }
}

export default App;
