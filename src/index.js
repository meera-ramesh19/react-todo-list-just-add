//importing all the necessary files and dependencies
  
// imports react component functionality from react
import React from 'react';
// imports react DOM interaction functionality from react
import ReactDOM from 'react-dom';
// imports index styles
import './index.css';
// imports app component from app file
import App from './App';
// imports reportWebVitals from file. Allows site to cache resources
import reportWebVitals from './reportWebVitals';

//ReactDOM renders stuff to the DOM
// renders the following
ReactDOM.render(
  //StrictMode is a tool for highlighting potential problems in an application.
  //StrictMode does not render any visible UI.
  //It activates additional checks and warnings for its descendants.
  <React.StrictMode>
  //App is used to output everything in the browser.
    <App />
  </React.StrictMode>,
  //a “root” DOM node because everything inside it will be managed by React DOM.
//Applications built with just React usually have a single root DOM node. 
 // If you are integrating React into an existing app, you may have as many isolated root
  //DOM nodes as you like.
  // will render app component in #root element of index.html
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// this caches resources so the page will still be viewable on slow connections
reportWebVitals();
