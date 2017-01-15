import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import {Provider} from 'react-redux';
import appReducer from './reducers'
import {createStore} from 'redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.body.appendChild(document.createElement('div')),
);
