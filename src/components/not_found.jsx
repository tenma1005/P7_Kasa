import React from "react";

//import du composant de React Router -> NavLink
import { NavLink } from "react-router-dom";

//import de l'image à utiliser pour la création ce composant :
import image from "../images/404.png";

/*=============================================================================================
COMPOSANT DE LA PAGE ERROR 404 -> LE BUT EST DE FAIRE AFFICHER LE MESSAGE D'ERREUR 404 
                                  ET METTRE LE LIEN DE RETOUR VERS LA PAGE D'ACCUEIL
===============================================================================================*/

function NotFound() {
  return (
    <main className="error">
      <h2 className="error-404">
        <img src={image} alt="" />
      </h2>
      <h3 className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <NavLink to="/" className="return-home">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}

export default NotFound;
