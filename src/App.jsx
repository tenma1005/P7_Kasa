import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Router from "./Router";

function App() {
  const [logements, setLogements] = useState([]);
  useEffect(function () {
    fetch("http://localhost:3000/logements.json")
      .then(function (response) {
        console.table(response);
        return response.json();
      })
      .then(function (logements) {
        //console.log(data);
        //console.table(data[0].id);
        console.table(logements);
        setLogements(logements);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Router logements={logements} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
