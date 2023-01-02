import React from "react";

function Collapse({ title, content, vector1 }) {
  function eventCollapse(event) {
    event.preventDefault();
    const boxText = event.target.nextSibling;
    const vector = event.target.lastChild;

    if (boxText.classList.contains("box-down")) {
      boxText.classList.remove("box-down");
      vector.classList.remove("vector-rotation");
    } else {
      boxText.classList.add("box-down");
      vector.classList.add("vector-rotation");
    }
  }

  if (Array.isArray(content) === true) {
    return (
      <div className="collapse">
        <button onClick={eventCollapse}>
          <p>{title}</p>
          <img src={vector1} alt="" />
        </button>
        <div className="collapse-boxtext">
          <ul>
            {content.map(function (equipment, index) {
              return <li key={index}>{equipment}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="collapse">
        <button onClick={eventCollapse}>
          <p>{title}</p>
          <img src={vector1} alt="" />
        </button>
        <div className="collapse-boxtext">
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default Collapse;
