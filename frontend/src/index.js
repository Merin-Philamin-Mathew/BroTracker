import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Batch from './components/context/BatchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Batch>
  <App />
  </Batch>
);


