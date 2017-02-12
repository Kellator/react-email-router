require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import EmailListContainer from './components/email-list-container';

const routes = (
	<Router history={hashHistory}>
		<Route path="/emails" component={EmailListContainer} />
	</Router>
);

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(routes, document.getElementById('app'))
);