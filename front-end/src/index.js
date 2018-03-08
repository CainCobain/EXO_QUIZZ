import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
//Setup the base url for axios  
axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
