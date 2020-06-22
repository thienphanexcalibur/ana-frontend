import ReactDOM from 'react-dom';
import * as React from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import configurableStore from '@/store';
import 'semantic-ui-css/semantic.min.css';

const store = configurableStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
document.querySelector('#main')
);