import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [cards, setCards] = useState();

  useEffect(function () {
    fetch("http://localhost:3000/logements.json")
      .then(function (response) {
        console.table(response);
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        //console.table(data[0].id);
        console.table(data);
        setCards(data);
      });
  }, []);

  return (
    <section className="list-card">
      {cards &&
        cards.map(function (card) {
          return (
            <article key={card.id}>
              <Link to={`/logements/${card.id}`}>
                <div className="card">
                  <img src={card.cover} alt="" className="card-img" />
                  <h2 className="card-title">{card.title}</h2>
                </div>
              </Link>
            </article>
          );
        })}
    </section>
  );
}

export default Cards;
