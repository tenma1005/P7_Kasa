import React from "react";

/*=============================================================================================
COMPOSANT POUR LA PAGE LOGEMENTS -> LE BUT EST DE FAIRE AFFICHER LE NOM 
                                    ET LA PHOTO DE PROFIL DU PROPRIÉTAIRE DU LOGEMENT EN QUESTION
===============================================================================================*/

function Host(host) {
  return (
    <div className="host">
      <div className="host-identity">
        <p>{host.name}</p>
      </div>

      <img src={host.picture} alt="" />
    </div>
  );
}

export default Host;
