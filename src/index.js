import ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import configurableStore, { history } from '@/store';
import { ConnectedRouter } from 'connected-react-router';
import App from './App.jsx';
import 'semantic-ui-css/semantic.min.css';
import '@styles/index.styl';

const store = configurableStore();
ReactDOM.render(
	// eslint-disable-next-line react/jsx-filename-extension
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.querySelector('#main')
);
