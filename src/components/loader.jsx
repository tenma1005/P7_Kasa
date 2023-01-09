import React from "react";

function Loader() {
  return (
    <div className="loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>Chargement en cours</h2>
    </div>
  );
}

export default Loader;
