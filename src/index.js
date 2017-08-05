import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';

import registerServiceWorker from './registerServiceWorker';

const counter = ({value, onIncrement, onDecrement}) => (
    <div>hello</div>
)

function onIncrement() {
    store.dispatch({
        type: 'INCREMENT'
    });
}

function onDecrement() {
    store.dispatch({
        type: 'DECREMENT'
    });
}

const { createStore } = Redux;
const store = createStore(counter);

ReactDOM.render(
    <counter
        value={store.getState()} 
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        />, 
    document.getElementById('root')
);

store.subscribe(render);
render();
registerServiceWorker();
