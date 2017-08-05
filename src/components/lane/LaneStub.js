import React from 'react';

class LaneStub extends React.Component {
    render() {
        return (
            <div className="lane lane--form"
                onClick={() => this.props.createLane()}>
                + create new lane
            </div>
        );
    }
}

export default LaneStub;
