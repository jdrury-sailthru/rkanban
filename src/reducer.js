import Redux from 'redux';
/**
 * lane
 * task 
 */
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_LANE':
        case 'EDIT_LANE':
        case 'DELETE_LANE':
        case 'MOVE_LANE':

        case 'CREATE_TASK':
        case 'EDIT_TASK':
        case 'DELETE_TASK':
        case 'MOVE_TASK':
    }
}

const { createStore } = Redux;
const store = createStore(reducer);

store.getState()
store.dispatch({ type: 'INCREMENT' })