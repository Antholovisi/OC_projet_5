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


// CORRECTIONS A FAIRE : 

// -Revoir le soulignement pour la navbar dans le HEADER (au hover ?, au clic ? transi de l'apparition du soulignement ?)
// -Comment faire les ombres projetées sur le texte en lui même dans le BANNER ?


// A FAIRE DANS LE FUTUR :

// -Faire toute la page ABOUT 
// -Faire tout le responsive pour ABOUT
// -Une fois cette étape fini et propre c'est parti pour tout brancher et tater du JS

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