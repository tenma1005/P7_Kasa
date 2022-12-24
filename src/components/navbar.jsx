import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../images/logo.png";

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
