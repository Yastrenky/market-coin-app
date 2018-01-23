import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './hover.css';
import './index.css';
import './mdbootstrap.css'
import App from './components/App';


ReactDOM.render(  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

