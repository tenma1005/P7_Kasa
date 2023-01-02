import React from "react";
import Banner from "../components/banner";
import image from "../images/banner.png";
import Cards from "../components/cards";

function Accueil({ logements }) {
  return (
    <main>
      <Banner image={image} title={"Chez vous, partout et ailleurs"} />
      <Cards logements={logements} />
    </main>
  );
}

export default Accueil;
