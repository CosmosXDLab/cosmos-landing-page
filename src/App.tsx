import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import './App.css';
import HomeSection from './components/HomeSection';
import Contact from './components/Contact';
import Service from './components/Service';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />

      <section id="servicios" className="section-size bg-white">
      < Service />
      </section>
      <section id="proyectos" className="section-size bg-red-100">
        Proyectos Section
      </section>
      <section id="acerca de" className="section-size bg-white">
        <Nosotros />
      </section>
      <section id="contacto" className="section-size bg-purple-100">
      <Contact />
      </section>
    </div>
  );
};

export default App;
