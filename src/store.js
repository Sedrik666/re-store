import { createStore, compose } from 'redux';
import reducer from "./reducers/reducers";

const stringEnhancer  = (createStore) => (...args) => {
    const store = createStore(...args);

    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        if(typeof action === 'string') {
            return originalDispatch({
                type: action
            })
        }
        originalDispatch(action)
    };

    return store;
};

const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action.type);
        originalDispatch(action)
    };

    return store;
};

const store = createStore(reducer, compose(stringEnhancer,logEnhancer));


store.dispatch('HELLO_WORD');

export default store;