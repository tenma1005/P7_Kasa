import React from "react";

/*=============================================================================================
COMPOSANT POUR LA PAGE D'ACCUEIL ET LA PAGE DES LOGEMENTS -> LE BUT EST DE FAIRE AFFICHER UN LOADER LORS DES CHARGEMENTS DE DONNÉES
===============================================================================================*/

function Loader() {
  return (
    <div className="loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>Chargement en cours</h2>
    </div>
  );
}

export default Loader;
