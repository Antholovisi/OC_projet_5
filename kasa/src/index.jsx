import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// A finir :

// 1/ Revoir le dégradé linéaire pour les CARDS (important ou pas ?)

// 2/ Faire en sorte que lorsque l'on clique sur le lien en bas de la page 404 nous ramène en haut de la page d'acceuil

// 3/ Voir comment faire les animations pour le chevron dans les deux sens pareil pour les bandeaux déroulants

// 4/ Revoir le fonctionnement du carousel (probleme de border radius lors du changement d'image, probleme de le gestion de l'infinite loop)
