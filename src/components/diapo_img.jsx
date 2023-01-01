import React from "react";
import { useState } from "react";

import arrowLeft from "../images/vector_gauche.png";
import arrowRight from "../images/vector_droite.png";

function DiapoImg({ diapo }) {
  const [currentImg, setCurrentImg] = useState(0);

  function nextImage() {
    if (currentImg === diapo.length - 1) {
      return setCurrentImg(0);
    } else {
      return setCurrentImg(currentImg + 1);
    }
  }

  function prevImage() {
    if (currentImg === 0) {
      return setCurrentImg(diapo.length - 1);
    } else {
      return setCurrentImg(currentImg - 1);
    }
  }

  function arrow() {
    if (diapo.length > 1) {
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
      return null;
    }
  }
  return (
    <div className="diapo">
      {diapo.map(function (picture, index) {
        if (index === currentImg) {
          return (
            <div key={index} className={"img-active"}>
              <img src={picture} alt="" />
            </div>
          );
        } else {
          return (
            <div key={index} className={"img-inactive"}>
              <img src={picture} alt="" />
            </div>
          );
        }
      })}
      {}
      {arrow()}
    </div>
  );
}

export default DiapoImg;
