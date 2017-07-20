import React from 'react';

class LaneForm extends React.Component {
    render() {
        return (
            <div className="lane lane--form"
                onClick={() => this.props.createLane()}>
                + create new lane
            </div>
        );
    }
}

export default LaneForm;
