import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router'; 

import * as serviceWorker from './serviceWorker';

import Page1 from './components/Page1/Page1';
import StickyApp from './components/StickyApp';

const rootP = <Page1 />
const rootA = <StickyApp />;

ReactDOM.render(rootA, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();