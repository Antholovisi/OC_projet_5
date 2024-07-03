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

// 1/ Revoir le dégradé linéaire pour les CARDS important ou pas ?
// 2/ Faire en sorte que lorsque l'on clique sur le lien en bas de la page 404 nous ramène en haut de la page d'acceuil
// 3/ Voir comment faire les animations pour le chevron dans les deux sens pour les bandeaux déroulants
// 4/ Revoir le fonctionnement du carousel (probleme de border radius lors du changement d'image, probleme de le gestion de l'infinite loop)
// 5/ Voir comment changer la height pour le banner de la page a propos

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
