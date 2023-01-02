import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./error_404";
import Opinion from "../components/opinion";
import Host from "../components/host";
import DiapoImg from "../components/diapo_img";
import Categories from "../components/categories";
import Collapse from "../components/collapse";

import vector1 from "../images/vector-1.png";

function Logement({ logements }) {
  const { logementId } = useParams();
  const [location] = useState(
    logements.find((logement) => logement.id === logementId)
  );
  console.log(location);

  if (location === undefined) {
    return <Error />;
  } else {
    return (
      <main className="accommodation">
        <DiapoImg diapo={location.pictures} />
        <div className="accommodation-content">
          <div className="accommodation-details">
            <h2 className="accommodation-name">{location.title}</h2>
            <p className="accommodation-city">{location.location}</p>
            <div className="accommodation-categories">
              {location.tags.map(function (tag, index) {
                return <Categories key={index} categoriesText={tag} />;
              })}
            </div>
          </div>
          <div className="accommodation-opinion-and-host">
            <Opinion rating={location.rating} />
            <Host name={location.host.name} picture={location.host.picture} />
          </div>
        </div>
        <div className="accommodation-description-and-equipement">
          <Collapse
            title="Description"
            content={location.description}
            vector1={vector1}
          />
          <Collapse
            title="Équipement"
            content={location.equipments}
            vector1={vector1}
          />
        </div>
      </main>
    );
  }
}

export default Logement;
