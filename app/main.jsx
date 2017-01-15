import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import appReducer from './reducers';
import App from './components/App/App';

injectTapEventPlugin();

const store = createStore(appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.body.appendChild(document.createElement('div')),
);
