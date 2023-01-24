import React from "react";

//import des Hooks :
import { useEffect } from "react"; //Hook d'effet
import { useState } from "react"; //Hook d'état
import { useParams } from "react-router-dom"; //Hook de contexte

//import des composants React :
import Error from "./error_404";
import Opinion from "../components/opinion";
import Host from "../components/host";
import DiapoImg from "../components/diapo_img";
import Categories from "../components/categories";
import Collapse from "../components/collapse";
import Loader from "../components/loader";

//import de l'image à utiliser :
import vector1 from "../images/vector-1.png";

/*=============================================================================================
COMPOSANT DE LA PAGE LOGEMENTS -> LE BUT EST DE FAIRE AFFICHER LE LOGEMENT SÉLECTIONNÉ
                                  À PARTIR DE LA PAGE D'ACCUEIL
===============================================================================================*/

function Logement({ logements }) {
  //On récupère l'id du logement sélectionné via l'URL et on le stoke
  const { logementId } = useParams();

  //Déclaration d'une variable d'état, que l'on appellera "location"
  const [location, setLocation] = useState(null);
  //console.log(location);

  /*
  Ici, useEffect est utilisé pour trouver le logement sélectionné dans la liste de tous les logements à partir de son id récupéré via l'URL.
  Il prend en paramètre une fonction qui contient cette logique et un tableau de dépendances qui indique quand la fonction doit être exécutée à nouveau.
  */
  useEffect(
    function () {
      if (logements !== undefined && logements.length > 0) {
        setLocation(
          logements.find(function (logement) {
            return logement.id === logementId;
          })
        );
      }
    },
    [logements, logementId]
  );

  //Pour finir, on place la condition suivante :
  if (location === undefined) {
    return <Error />;
  } else if (location === null) {
    return <Loader />;
  } else {
    return (
      <main className="accommodation">
        <DiapoImg diapo={location.pictures} />
        <div className="accommodation-content">
          <div className="accommodation-details">
            <h2 className="accommodation-name">{location.title}</h2>
            <p className="accommodation-city">{location.location}</p>
            <div className="accommodation-categories">
              {location.tags.map(function (tag, index) {
                return <Categories key={index} categoriesText={tag} />;
              })}
            </div>
          </div>
          <div className="accommodation-opinion-and-host">
            <Opinion rating={location.rating} />
            <Host name={location.host.name} picture={location.host.picture} />
          </div>
        </div>
        <div className="accommodation-description-and-equipement">
          <Collapse
            title="Description"
            content={location.description}
            vector1={vector1}
          />
          <Collapse
            title="Équipement"
            content={location.equipments}
            vector1={vector1}
          />
        </div>
      </main>
    );
  }
}

export default Logement;
