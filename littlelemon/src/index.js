import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <meta name="description" content=""/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="A healthy mediteranean restaraunt located in Chicago."/>
    <meta name="og:image" content=""/> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
