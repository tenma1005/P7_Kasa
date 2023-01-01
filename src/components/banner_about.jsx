import React from "react";

function BannerAbout({ image, image2 }) {
  return (
    <div className="banner banner-about">
      <img src={image} alt="image_1" className="banner-img banner-img-1" />
      <img src={image2} alt="image_2" className="banner-img banner-img-2" />
    </div>
  );
}

export default BannerAbout;
