import React from "react";

//import du composant de React Router -> NavLink
import { NavLink } from "react-router-dom";

//import de l'image à utiliser pour la création ce composant :
import Logo from "../images/logo.png";

/*=============================================================================================
COMPOSANT POUR TOUTES LES PAGES DE L'APPLICATION -> LE BUT EST DE FAIRE AFFICHER LE LOGO DE "KASA"
                                                    ET LA BARRE DE NAVIGATION
===============================================================================================*/

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </NavLink>
      <div className="navbar-link">
        <NavLink to="/" className="navbar-link-style">
          Accueil
        </NavLink>
        <NavLink to="/a_propos" className="navbar-link-style">
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
