import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Fiche from './components/FicheLogement/Fiche';
import Error404 from './components/Error/Error404';
import NavBar from './components/NavBar/NavBar';
import APropos from './components/APropos/APropos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/Fiche-Logement/:id" element={<Fiche />} />
        <Route path="/Fiche-Logement/*" element={<Error404 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
