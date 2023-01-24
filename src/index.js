import React from "react";

// import de ReactDOM (qui permet de connecter React à un navigateur web)
import ReactDOM from "react-dom/client";

// import du fichier App
import App from "./App";

// import des fichiers CSS (en format scss grâce au package "Sass"):
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
//On utilise la méthode render pour afficher les composants React dans cet élément de la page HTML (root)
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
  // On retire le strict mode de react pour évite les doublons dans la console qui ne sont pas très agréables...
);

/*
NOTE IMPORTANTE :
Le fichier index.js dans une application React sert à configurer et à démarrer l'application. 
Pour faire simple, c'est le point d'entrée de l'application.
C'est-à-dire le fichier qui est chargé en premier lorsque l'application démarre.
*/
