import React from "react";

//import des images à utiliser pour la création ce composant :
import red from "../images/star_red.png";
import grey from "../images/star_grey.png";

/*=============================================================================================
COMPOSANT POUR LA PAGE LOGEMENTS -> LE BUT EST DE FAIRE AFFICHER LA NOTE MOYENNE DU LOGEMENT EN QUESTION
===============================================================================================*/

function Opinion({ rating }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="opinion">
      {/*On détermine si la note passée en paramètre est supérieure ou égale à number : */}
      {numbers.map(function (number) {
        if (rating >= number) {
          //Si c'est le cas, il affiche une image de "star rouge" (red.png) pour indiquer que cette étoile est sélectionnée.
          return (
            <img
              key={number.toString()}
              className="opinion-icon"
              src={red}
              alt=""
            />
          );
        } else {
          //Sinon, il affiche une image de "star grise" (grey.png) pour indiquer que cette étoile n'est pas sélectionnée.
          return (
            <img
              key={number.toString()}
              className="opinion-icon"
              src={grey}
              alt=""
            />
          );
        }
      })}
    </div>
  );
}

export default Opinion;
