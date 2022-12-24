import React from "react";

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner-img" />
      <h2 className="banner-text">{title}</h2>
    </div>
  );
}

export default Banner;
