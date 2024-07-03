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

// 1/ Revoir le dégradé linéaire pour les CARDS
// 2/ Revoir le soulignement pour la NAVBAR
// 3/ Revoir les espacements pour les equipements dans la fiche appartement
// 4/ faire le collapse pour equipement et description

// A FAIRE DANS LE FUTUR :

// AMELIORATION SI ENCORE DU TEMPS :
// -Faire des variables et des mixin en scss peut etre pour :
//   -Les couleurs
//   -La police
//   -La taille du texte
//   -le code redondant en css type {
//     margin
//     padding
//     display ...
//   }
// -Voir si possibilité d'améliorer le JS en refactorisant peut etre les fonctions
