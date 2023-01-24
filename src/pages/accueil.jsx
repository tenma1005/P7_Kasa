import React from "react";
import Banner from "../components/banner";

//import des composants React :
import Cards from "../components/cards";
import Loader from "../components/loader";

//import des images :
import image from "../images/banner.png";

/*=============================================================================================
COMPOSANT DE LA PAGE D'ACCUEIL -> LE BUT EST DE FAIRE AFFICHER LA BANNIÉRE ET TOUS LES LOGEMENTS EN "BASE DE DONNÉES" 
(bien qu'elle n'existe pas encore, on utilise le fichier json qu'on a placé dans le dossier public comme dépannage -> http://localhost:3000/logements.json)
===============================================================================================*/

function Accueil({ logements }) {
  if (logements.length > 0) {
    return (
      <main>
        <Banner image={image} title={"Chez vous, partout et ailleurs"} />
        <Cards logements={logements} />
      </main>
    );
  } else {
    return (
      <main>
        <Banner image={image} title={"Chez vous, partout et ailleurs"} />
        <Loader />
      </main>
    );
  }
}

export default Accueil;
