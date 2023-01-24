import React from "react";

/*=============================================================================================
COMPOSANT POUR LA PAGE LOGEMENTS -> LE BUT EST DE FAIRE AFFICHER LES CATÉGORIES DU LOGEMENT EN QUESTION
===============================================================================================*/

function Categories({ categoriesText }) {
  return (
    <div className="categories">
      <p className="categories-text">{categoriesText}</p>
    </div>
  );
}

export default Categories;
