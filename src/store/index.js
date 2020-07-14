/* eslint-disable max-len */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducer from './reducers.js';

const logger = createLogger({});
export const history = createBrowserHistory();

function configurableStore() {
	return createStore(
		reducer(history),
		undefined,
		compose(applyMiddleware(routerMiddleware(history), thunk, logger), composeWithDevTools())
	);
}

export default configurableStore;
