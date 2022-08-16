import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Fiche from './components/FicheLogement/Fiche';
import Error404 from './components/Error/Error404';
import NavBar from './components/NavBar/NavBar';
import APropos from './components/APropos/APropos';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from 'react'

function App() {
  // envoi des donnees de locations de donnees a la page d'accueil et a la page de fiche logement
  const [locations, setLocations] = useState([]);
  // fetch des données de locations
  useEffect(() => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then(data => setLocations(data))
  }, []);

  return (
    <div className="App">
      {/* menu de navigation */}
      <NavBar />
      {/* route de navigation dans la page */}
      <Routes>
        <Route path="/" element={<Home locations={locations} />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/Fiche-Logement/:id" element={<Fiche locations={locations} />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      {/* footer de la page */}
      <Footer />
    </div>
  );
}
export default App;