import React from "react";

function Host(host) {
  return (
    <div className="host">
      <div className="host-identity">
        <p>{host.name}</p>
      </div>

      <img src={host.picture} alt="" />
    </div>
  );
}

export default Host;
