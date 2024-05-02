import React from 'react';
import ReactDOM from 'react-dom/client'; // render to specific DOM
import App from './App'; // This line imports the main App component

// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root')); // deprecated
const el = document.getElementById('root'); // get reference to div with id=root
const root = ReactDOM.createRoot(el); // tell react to take control that element
root.render(<React.StrictMode><App /></React.StrictMode>);