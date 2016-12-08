import React from 'react';
import ReactDOM from 'react-dom';
// Importa componentes
import App from './App';
import CardWrapper from './card/cardWrapper';
// Importa o CSS
import './index.css';

ReactDOM.render(
  <App />, document.getElementById('start')
);

ReactDOM.render(
	<CardWrapper />, document.getElementById('root')
);
