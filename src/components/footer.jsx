import React from "react";

//import de l'image à utiliser pour la création ce composant :
import logoFooter from "../images/logo_footer.png";

/*=============================================================================================
COMPOSANT POUR TOUTES LES PAGES DE L'APPLICATION -> LE BUT EST DE FAIRE AFFICHER LE FOOTER
===============================================================================================*/

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <img src={logoFooter} alt="" />
      <p className="copyright"> © {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
