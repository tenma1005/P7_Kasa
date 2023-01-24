import React from "react";

/*=============================================================================================
COMPOSANT POUR LA PAGE À PROPOS -> LE BUT EST D'AFFICHER LA BANNIÈRE DE LA PAGE "À PROPOS"
===============================================================================================*/

function BannerAbout({ image, image2 }) {
  return (
    <div className="banner banner-about">
      <img src={image} alt="image_1" className="banner-img banner-img-1" />
      <img src={image2} alt="image_2" className="banner-img banner-img-2" />
    </div>
  );
}

export default BannerAbout;
