import React from "react";

//import du composant React :
import NotFound from "../components/not_found";

/*=============================================================================================
COMPOSANT DE LA PAGE ERROR 404 -> LE BUT EST DE FAIRE AFFICHER CETTE PAGE D'ERREUR
                                  LORSQU'UNE URL EST INEXISTANTE DANS APPLICATION
===============================================================================================*/

function Error() {
  return <NotFound />;
}

export default Error;
