const { createStore } = require('redux');

const AUMENTAR_CONTADOR = 'AUMENTAR_CONTADOR';
const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR';
const CAMBIAR_NOMBRE = 'CAMBIAR_NOMBRE';

const initialState = {
    count: 0,
    name: 'Jorge', 
};
  
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AUMENTAR_CONTADOR:
            return {...state, count: state.count + 1};
        case DECREMENTAR_CONTADOR:
            return {...state, count: state.count - 1};
        case CAMBIAR_NOMBRE:
            return {...state, name: action.payload};    
        default:
            return {...state};
    }
};

const store = createStore(reducer);

const print = () => {
    console.log(store.getState());
};

store.subscribe(print);

store.dispatch({type: AUMENTAR_CONTADOR});
store.dispatch({type: DECREMENTAR_CONTADOR});
store.dispatch({type: CAMBIAR_NOMBRE, payload: 'Juan'});
