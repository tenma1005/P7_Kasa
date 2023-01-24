import React from "react";

//import du hook d'état useState :
import { useState } from "react";

//import des images à utiliser pour la création ce composant :
import arrowLeft from "../images/vector_gauche.png";
import arrowRight from "../images/vector_droite.png";

/*=============================================================================================
COMPOSANT POUR LA PAGE LOGEMENTS -> LE BUT EST DE FAIRE AFFICHER LA GALERIE
                                    D'IMAGE DU LOGEMENT EN QUESTION
===============================================================================================*/

function DiapoImg({ diapo }) {
  /*Déclaration d'une variable d'état, que l'on appellera "currentImg" qui est initialisée à 0.
  Cette variable est utilisée pour suivre quelle image du diapo est actuellement affichée à l'écran.*/
  const [currentImg, setCurrentImg] = useState(0);

  /*
  La fonction nextImage() est utilisée pour afficher l'image suivante du diapo en augmentant la valeur de currentImg de 1.
  si currentImg est déjà égal à la dernière image du diapo, il redémarre à 0 pour afficher la première image à nouveau.
  */
  function nextImage() {
    if (currentImg === diapo.length - 1) {
      return setCurrentImg(0);
    } else {
      return setCurrentImg(currentImg + 1);
    }
  }

  /*
  La fonction prevImage() est utilisée pour afficher l'image précédente du diapo en diminuant la valeur de currentImg de 1. 
  Si currentImg est déjà égal à 0, il redémarre à la dernière image du diapo.
  */
  function prevImage() {
    if (currentImg === 0) {
      return setCurrentImg(diapo.length - 1);
    } else {
      return setCurrentImg(currentImg - 1);
    }
  }

  //Ensuite, la fonction arrow() est utilisée pour déterminer si les boutons de navigation (flèche gauche et droite) doivent être affichés ou non :
  function arrow() {
    if (diapo.length > 1) {
      //Si la longueur du tableau d'images est supérieure à 1, cela signifie qu'il y a plus d'une image à afficher, donc les boutons de navigation sont affichés :
      return (
        <>
          <div className="btn-prev" onClick={prevImage}>
            <img src={arrowLeft} alt="" className="btn-prev-arrow" />
          </div>
          <div className="btn-next" onClick={nextImage}>
            <img src={arrowRight} alt="" className="btn-next-arrow" />
          </div>
        </>
      );
    } else {
      //Sinon ils ne sont pas affichés (car aucun interêt franchement...) :
      return null;
    }
  }

  /*
  Enfin, dans le return, il parcourt le tableau d'images et affiche l'image correspondant à currentImg avec une classe 
  "img-active" pour l'afficher et les autres avec une classe "img-inactive" pour les cacher :
  */
  return (
    <div className="diapo">
      {
        //On utilise la fonction map() pour parcourir toutes les images de l'objet "diapo" passé en props du composant DiapoImg :
        diapo.map(function (picture, index) {
          //Pour chaque image, il compare son index à la valeur de "currentImg" qui est la variable d'état (ne pas oublier)
          if (index === currentImg) {
            //Si l'index est égal à "currentImg", cela signifie que l'image actuellement affichée est celle-ci :
            //Alors on return avec la classe "img-active" (pour que ce soit "cette" image qui soit visible à l'écran)
            return (
              <div key={index} className={"img-active"}>
                <img src={picture} alt="" />
              </div>
            );
          } else {
            //Sinon on return avec la classe "img-inactive" (pour que ces images ne soit pas visible à l'écran).
            return (
              <div key={index} className={"img-inactive"}>
                <img src={picture} alt="" />
              </div>
            );
          }
        })
      }
      {/*Et on n'oublie pas la fonction arrow() qui permet de générer les boutons de navigation pour passer à l'image précédente ou suivante, si la diapo contient plus d'une image*/}
      {arrow()}
    </div>
  );
}

export default DiapoImg;
