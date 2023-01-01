import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Opinion from "../components/opinion";
import Host from "../components/host";
import DiapoImg from "../components/diapo_img";
import Categories from "../components/categories";
import Collapse from "../components/collapse";

import vector1 from "../images/vector-1.png";

function Logement() {
  const [location, setLocation] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });

  const { logementId } = useParams();
  //console.log("id de l'article affiché : " + logementId);

  useEffect(
    function () {
      fetch("http://localhost:3000/logements.json")
        .then(function (response) {
          //console.table(response);
          return response.json();
        })
        .then(function (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].id === logementId) {
              console.log("id de l'article affiché : " + data[i].id);
              console.table(data[i]);
              setLocation(data[i]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [logementId]
  );

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

export default Logement;
