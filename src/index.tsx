import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from "@sentry/browser";

ReactDOM.render(<App />, document.getElementById('root'));

Sentry.init({
  dsn: "https://7eec1c9cfdd840e49aa55f7fdbd37b41@sentry.io/1375125"
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
