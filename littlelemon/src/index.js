import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI, submitAPI } from "./api";
window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;

// window.fetchAPI = function(date) {
//   console.log("Mock fetchAPI called with date:", date);
//   return Promise.resolve([
//     "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
//   ]);
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
