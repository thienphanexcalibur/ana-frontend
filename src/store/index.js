import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers.js';

const middlewares = thunk;

function configurableStore() {
    return createStore(reducer, undefined, compose(applyMiddleware(middlewares), composeWithDevTools()));
}

export default configurableStore;