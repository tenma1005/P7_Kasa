import React from "react";

/*=============================================================================================
COMPOSANT POUR LA PAGE D'ACCUEIL -> LE BUT EST DE FAIRE AFFICHER LA BANNIÈRE DE LA PAGE D'ACCUEIL
===============================================================================================*/

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner-img" />
      <h2 className="banner-text">{title}</h2>
    </div>
  );
}

export default Banner;
