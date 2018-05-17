import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './hover.css';
import './index.css';
import './mdbootstrap.css';
import "./assets/mdbootstrap/css/bootstrap.min.css";
import "./assets/mdbootstrap/css/mdb.min.css";
import "./assets/mdbootstrap/css/style.css";
import "./assets/webfont/cryptocoins.css";
import "./assets/webfont/cryptocoins-colors.css";



import App from './components/App';


ReactDOM.render(  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

