import React from "react";
import Banner from "../components/banner";
import image from "../images/banner.png";
import Cards from "../components/cards";

function Accueil() {
  return (
    <main>
      <Banner image={image} title={"Chez vous, partout et ailleurs"} />
      <Cards />
    </main>
  );
}

export default Accueil;
