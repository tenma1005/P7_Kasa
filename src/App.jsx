import React from "react";

//import des Hooks :
import { useEffect } from "react"; //Hook d'effet
import { useState } from "react"; //Hook d'état

//import du composent de React Router pour permettre de gérer les routes de l'application :
import { BrowserRouter } from "react-router-dom";

//import du Router :
import Router from "./Router";

//import des composents React qui vont être utiliser sur la totalité des pages de l'application web :
import Navbar from "./components/navbar";
import Footer from "./components/footer";

/*=============================================================================================
COMPOSENT DE L'APP -> LE BUT EST DE CONFIGURER L'APPLICATION REACT. POUR FAIRE SIMPLE, C'EST LE POINT D'ENTRÉE POUR L'APPLICATION.
                      IL IMPORTE TOUS LES AUTRES COMPOSANTS DE L'APPLICATION. (c'est l'architecture de l'application)
===============================================================================================*/
//Il peut également contenir des logiques de gestion d'état :

function App() {
  const [logements, setLogements] = useState([]);
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
