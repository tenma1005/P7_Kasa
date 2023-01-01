import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import APropos from "./pages/a_propos";
import Logement from "./pages/logements";
import Error from "./pages/error_404";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Error />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="logements/:logementId" element={<Logement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
