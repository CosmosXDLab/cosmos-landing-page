import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import HomeSection from './components/HomeSection';



const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <section id="servicios" className="h-screen bg-yellow-100">
        Servicios Section
      </section>
      <section id="proyectos" className="h-screen bg-red-100">
        Proyectos Section
      </section>
      <section id="acerca de" className="h-screen bg-blue-100">
        Acerca De Section
      </section>
      <section id="contacto" className="h-screen bg-purple-100">
        Contacto Section
      </section>
    </div>
  );
};

export default App;
