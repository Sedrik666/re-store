import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers/reducers";

const logMiddleware = ({getState}) => (next/*dispatch*/) => (action) => {
    console.log(action.type, getState());
    return next(action);
};

const stringMiddleware = () => (next/*dispatch*/) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};


const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORD');

export default store;