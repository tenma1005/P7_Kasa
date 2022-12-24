import React from "react";
import Banner from "../components/banner";
import image from "../images/banner.png";
import Cards from "../components/cards";

const slogan = "Chez vous, partout et ailleurs";

function Accueil() {
  return (
    <main>
      <Banner image={image} title={slogan} />
      <Cards />
    </main>
  );
}

export default Accueil;
