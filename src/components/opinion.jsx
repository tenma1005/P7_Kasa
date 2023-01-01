import React from "react";

import red from "../images/star_red.png";
import grey from "../images/star_grey.png";

function Opinion({ rating }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="opinion">
      {numbers.map(function (number) {
        if (rating >= number) {
          return (
            <img
              key={number.toString()}
              className="opinion-icon"
              src={red}
              alt=""
            />
          );
        } else {
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
