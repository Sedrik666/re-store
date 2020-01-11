import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

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


const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
};

store.dispatch(delayedActionCreator(3000));

export default store;