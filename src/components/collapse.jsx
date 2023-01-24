import React from "react";

/*=============================================================================================
COMPOSANT POUR LES PAGES "À PROPOS" ET "LOGEMENTS" -> LE BUT EST DE FAIRE AFFICHER LES COLLAPSES
===============================================================================================*/

function Collapse({ title, content, vector1 }) {
  //la fonction eventCollapse() est utilisée pour gérer l'événement "click" sur le button :
  function eventCollapse(event) {
    const boxText = event.target.nextSibling;
    const vector = event.target.lastChild;

    //ensuite, on place une condition pour vérifier si la classe "box-down" est présente sur l'élément "boxText" ou non :
    if (boxText.classList.contains("box-down")) {
      //si c'est le cas, cela signifie que le contenu est déjà déplié, donc on retire la classe "box-down" et la classe "vector-rotation" sur l'élément "vector", ce qui va les replier.
      boxText.classList.remove("box-down");
      vector.classList.remove("vector-rotation");
    } else {
      //sinon, on ajoute ces classes pour déplier le contenu.
      boxText.classList.add("box-down");
      vector.classList.add("vector-rotation");
    }
  }

  //ici le composant va retourner soit un élément HTML qui contient une liste, soit un élément HTML qui contient un paragraphe. Pour cela, on effectue la condition suivante :
  if (Array.isArray(content) === true) {
    return (
      <div className="collapse">
        <button onClick={eventCollapse}>
          <p>{title}</p>
          <img src={vector1} alt="" />
        </button>
        <div className="collapse-boxtext">
          <ul>
            {content.map(function (equipment, index) {
              return <li key={index}>{equipment}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="collapse">
        <button onClick={eventCollapse}>
          <p>{title}</p>
          <img src={vector1} alt="" />
        </button>
        <div className="collapse-boxtext">
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default Collapse;
