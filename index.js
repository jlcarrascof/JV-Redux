const { createStore } = require('redux');

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUMENTAR_CONTADOR':
            return {...state, count: state.count + 1};
        default:
            return {...state};
    }
};

const store = createStore(reducer);

