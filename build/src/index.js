import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, if you have styles
import App from './App'; // Your main app component
import reportWebVitals from './reportWebVitals'; // Optional, for performance tracking

// Render the app into the div with id "root" in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// For web vitals tracking
reportWebVitals();

