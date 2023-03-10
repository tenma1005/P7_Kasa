import React from "react";

//import des composants React :
import BannerAbout from "../components/banner_about";
import Collapse from "../components/collapse";

//import des images :
import imageBanner from "../images/about_banner_desktop_version.png";
import imageBanner2 from "../images/about_banner_mobile_version.png";
import vector1 from "../images/vector-1.png";

/*=============================================================================================
COMPOSANT DE LA PAGE À PROPOS -> LE BUT EST DE FAIRE AFFICHER LA BANNIÈRE ET LES COLLAPSES
                                 (AVEC LES TEXTES DE LA MAQUETTE)
===============================================================================================*/

function AboutPage() {
  return (
    <main>
      <BannerAbout image={imageBanner} image2={imageBanner2} />

      <section className="about">
        <div className="about-collapses">
          <Collapse
            title="Fiabilité"
            content={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            }
            vector1={vector1}
          />
          <Collapse
            title="Respect"
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
            vector1={vector1}
          />
          <Collapse
            title="Service"
            content={
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            }
            vector1={vector1}
          />
          <Collapse
            title="Sécurité"
            content={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
            vector1={vector1}
          />
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
