import React from "react";

//import du composant de React Router -> NavLink
import { NavLink } from "react-router-dom";

/*=============================================================================================
COMPOSANT POUR LA PAGE D'ACCUEIL -> LE BUT EST DE FAIRE AFFICHER TOUS LES LOGEMENTS EN "BASE DE DONNÉES"
(bien qu'elle n'existe pas encore, on utilise le fichier json qu'on a placé dans le dossier public comme dépannage -> http://localhost:3000/logements.json)
===============================================================================================*/

//ce composant React va afficher une liste de logements en utilisant la fonction map() pour parcourir le tableau de logements passé en props :

function Cards({ logements }) {
  return (
    <section className="list-card">
      {logements &&
        logements.map(function (logement) {
          return (
            <article key={logement.id}>
              <NavLink to={`/logements/${logement.id}`}>
                <div className="card">
                  <img src={logement.cover} alt="" className="card-img" />
                  <h2 className="card-title">{logement.title}</h2>
                </div>
              </NavLink>
            </article>
          );
        })}
    </section>
  );
}

export default Cards;
