import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import APropos from "./pages/a_propos";
import Logement from "./pages/logements";
import Error from "./pages/error_404";

function Router({ logements }) {
  return (
    <Routes>
      <Route path="/" element={<Accueil logements={logements} />} />
      <Route path="*" element={<Error />} />
      <Route path="/a_propos" element={<APropos />} />
      <Route
        path="logements/:logementId"
        element={<Logement logements={logements} />}
      />
    </Routes>
  );
}

export default Router;
