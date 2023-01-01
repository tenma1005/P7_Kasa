import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
  // On retire le strict mode de react pour évite les doublons dans la console qui ne sont pas très agréables...
);
