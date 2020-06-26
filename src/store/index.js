import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers.js';

const logger = createLogger({});
function configurableStore() {
    return createStore(reducer, undefined, compose(applyMiddleware(thunk, logger), composeWithDevTools()));
}

export default configurableStore;