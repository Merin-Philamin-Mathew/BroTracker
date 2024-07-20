import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Batch from './components/context/BatchContext';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Batch>
    <Provider store={store}>
    <App />
    </Provider>
  
  </Batch>
);


