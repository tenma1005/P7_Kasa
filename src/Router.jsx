import React from "react";

//import des éléments de React Router pour la gestion de la navigation et les redirections de l'application :

//Routes est un composant qui vous permet de définir différentes routes pour votre application, chacune associée à un composant à afficher lorsque l'URL correspondante est visitée.
import { Routes } from "react-router-dom";
//Route est un composant qui correspond à une route spécifique, il va prendre en charge l'affichage du composant correspondant à cette route.
import { Route } from "react-router-dom";

//import des composants des différentes pages de l'application :
import Accueil from "./pages/accueil";
import APropos from "./pages/a_propos";
import Logement from "./pages/logements";
import Error from "./pages/error_404";

function Router({ logements }) {
  return (
    <Routes>
      <Route path="/" element={<Accueil logements={logements} />} />
      <Route path="/a_propos" element={<APropos />} />
      <Route
        path="logements/:logementId"
        element={<Logement logements={logements} />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
