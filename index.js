const { createStore } = require('redux');

const AUMENTAR_CONTADOR = 'AUMENTAR_CONTADOR';
const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR';
const CAMBIAR_NOMBRE = 'CAMBIAR_NOMBRE';
const AGREGAR_NUMERO = 'AGREGAR_NUMERO';

const initialState = {
    count: 0,
    name: 'Jorge',
    numeros: [1, 2, 3] 
};
  
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AUMENTAR_CONTADOR:
            return {...state, count: state.count + 1};
        case DECREMENTAR_CONTADOR:
            return {...state, count: state.count - 1};
        case CAMBIAR_NOMBRE:
            return {...state, name: action.payload};    
        case AGREGAR_NUMERO:
            return {...state, numeros: [...state.numeros, action.payload ]};    
        default:
            return {...state};
    }
};

const store = createStore(reducer);

const print = () => {
    console.log(store.getState());
};

store.subscribe(print);

const aumentarContador = () => {
    return {type: AUMENTAR_CONTADOR};
};

store.dispatch(aumentarContador());
store.dispatch({type: DECREMENTAR_CONTADOR});
store.dispatch({type: CAMBIAR_NOMBRE, payload: 'Juan'});
store.dispatch({type: AGREGAR_NUMERO, payload: 10});
