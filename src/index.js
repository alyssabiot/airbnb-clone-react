import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './components/hello';
// import registerServiceWorker from './registerServiceWorker';

const root = <Hello firstName="Alyssa" lastName="Biot" />;

ReactDOM.render(root, document.getElementById('root'));
// registerServiceWorker();
