import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/main/main.scss';
import Routing from './App';

// Création du root pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application React dans le DOM
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
