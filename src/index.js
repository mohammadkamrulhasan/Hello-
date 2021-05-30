import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
    <App />
    </Provider>
=======
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> origin/Ahmed-Ali
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

