import React from "react";

import { Link } from "react-router-dom";

function Cards({ logements }) {
  return (
    <section className="list-card">
      {logements &&
        logements.map(function (logement) {
          return (
            <article key={logement.id}>
              <Link to={`/logements/${logement.id}`}>
                <div className="card">
                  <img src={logement.cover} alt="" className="card-img" />
                  <h2 className="card-title">{logement.title}</h2>
                </div>
              </Link>
            </article>
          );
        })}
    </section>
  );
}

export default Cards;
