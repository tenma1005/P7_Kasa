import React from "react";

//import des Hooks :
import { useEffect } from "react"; //Hook d'effet
import { useState } from "react"; //Hook d'état

//import du composant de React Router pour permettre de gérer les routes de l'application :
import { BrowserRouter } from "react-router-dom";

//import du Router :
import Router from "./Router";

//import des compsants React qui vont être utiliser sur la totalité des pages de l'application web :
import Navbar from "./components/navbar";
import Footer from "./components/footer";

/*=============================================================================================
COMPOSANT DE L'APP -> LE BUT EST DE DÉFINIR LA STRUCTURE DE L'APPLICATION ET LES COMPOSANTS PRINCIPAUX DE L'APPLICATION.
===============================================================================================*/
//Il peut également contenir des logiques de gestion d'état :

function App() {
  //Déclaration d'une variable d'état, que l'on appellera "logements"
  const [logements, setLogements] = useState([]);

  /*
  useEffect est utilisé pour effectuer un fetch à une API pour récupérer les données des logements, 
  puis met à jour l'état logements en utilisant setLogements.
  */
  useEffect(function () {
    fetch("http://localhost:3000/logements.json")
      .then(function (response) {
        //console.table(response);
        return response.json();
      })
      .then(function (logements) {
        //console.log(data);
        //console.table(data[0].id);
        //console.table(logements);
        setLogements(logements);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Router logements={logements} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
