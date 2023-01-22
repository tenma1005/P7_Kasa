import React from "react";
import { NavLink } from "react-router-dom";
import image from "../images/404.png";

function NotFound() {
  return (
    <main className="error">
      <h2 className="error-404">
        <img src={image} alt="" />
      </h2>
      <h3 className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <NavLink to="/" className="return-home">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}

export default NotFound;
