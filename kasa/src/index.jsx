import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/main/main.scss';
import Routing from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
