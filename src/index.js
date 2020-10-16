import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {makeServer} from '../src/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
