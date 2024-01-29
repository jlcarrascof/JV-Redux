const { createStore } = require('redux');

const initialState = {
  count: 0, 
  users: [],
  friends: {},
  darkMode: true,
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

store.dispatch({ type: 'AUMENTAR_CONTADOR' });