import React from "react";
import Banner from "../components/banner";
import image from "../images/banner.png";
import Cards from "../components/cards";

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
        <div>Chargement en cours...</div>
      </main>
    );
  }
}

export default Accueil;
