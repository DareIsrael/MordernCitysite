import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import BrowserRouter from 'react-router-dom/BrowserRouter'

 ReactDOM.render(
    (<BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>),
    
    document.getElementById('root'));
