import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Fiche from './components/FicheLogement/Fiche';
import Error404 from './components/Error/Error404';
import NavBar from './components/NavBar/NavBar';
import APropos from './components/APropos/APropos';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from 'react'

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then(data => setLocations(data))
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home locations={locations} />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/Fiche-Logement/:id" element={<Fiche locations={locations} />} />
        <Route path="/Fiche-Logement/*" element={<Error404 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
