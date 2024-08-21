import React, { useEffect, useState } from 'react';
import '../styles/global.css';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all border-b ${
        isSticky ? 'bg-white text-purple_oscuro shadow-xl' : 'bg-transparent text-white'
      }`}
    >
      <nav className="container mx-auto section-padding-r-l py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={isSticky ? "./src/assets/icon_logo.png" : "./src/assets/cosmos.png"}
            alt="Logo"
            className="image-logo"
          />
          <h1 className={`text-18 font-bold ${isSticky ? 'text-purple_oscuro' : 'text-white'}`}>
            <a href="home">Cosmos Experience Developer</a>
          </h1>
        </div>
        {/* Menú de navegación */}
        <div className="relative flex items-center space-x-4">
          {/* Menú principal visible en pantallas grandes */}
          <ul
            className={`hidden xl:flex space-x-6 ${isSticky ? 'text-purple_oscuro' : 'text-white'} text-16 xl:space-x-8 items-center`}
          >
            <li>
              <a href="#inicio" className="hover:text-purple_claro block py-2 xl:py-0">
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-purple_claro block py-2 xl:py-0">
                Servicios
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-purple_claro block py-2 xl:py-0">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#acerca" className="hover:text-purple_claro block py-2 xl:py-0">
                Acerca De
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-purple_claro block py-2 xl:py-0">
                Contacto
              </a>
            </li>
            <li>
              <button className={`focus:outline-none ${isSticky ? 'text-purple_oscuro' : 'text-white'}`}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a7 7 0 014.95 11.95l4.95 4.95M16 11a5 5 0 10-10 0 5 5 0 0010 0z"
                  />
                </svg>
              </button>
            </li>
            <li className="relative flex items-center">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`focus:outline-none ${isSticky ? 'text-purple_oscuro' : 'text-black'} bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center space-x-2`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2" />
                </svg>
                <span className="hidden xl:inline">ESP</span>
              </button>
              {isLanguageOpen && (
                <ul className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <li>
                    <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">US</button>
                  </li>
                  <li>
                    <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">FRA</button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          {/* Menú flotante visible solo en pantallas pequeñas */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg xl:hidden">
              <ul className="space-y-2 p-2">
                <li>
                  <a href="#inicio" className="block py-2 px-4 text-purple_oscuro hover:bg-gray-100">Inicio</a>
                </li>
                <li>
                  <a href="#servicios" className="block py-2 px-4 text-purple_oscuro hover:bg-gray-100">Servicios</a>
                </li>
                <li>
                  <a href="#proyectos" className="block py-2 px-4 text-purple_oscuro hover:bg-gray-100">Proyectos</a>
                </li>
                <li>
                  <a href="#acerca" className="block py-2 px-4 text-purple_oscuro hover:bg-gray-100">Acerca De</a>
                </li>
                <li>
                  <a href="#contacto" className="block py-2 px-4 text-purple_oscuro hover:bg-gray-100">Contacto</a>
                </li>
                <li>
                  <button className="block py-2 px-4 text-purple_oscuro hover:bg-gray-100 w-full text-left">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 4a7 7 0 014.95 11.95l4.95 4.95M16 11a5 5 0 10-10 0 5 5 0 0010 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className={`w-full text-purple_oscuro hover:bg-gray-100 px-4 py-2 flex items-center space-x-2 ${isSticky ? 'text-purple_oscuro' : 'text-black'} bg-white border border-gray-300 rounded-full`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2" />
                    </svg>
                    <span className="hidden xl:inline">ESP</span>
                  </button>
                  {isLanguageOpen && (
                    <ul className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
                      <li>
                        <button className="block px-4 py-2 text-purple_oscuro hover:bg-gray-100 w-full text-left">US</button>
                      </li>
                      <li>
                        <button className="block px-4 py-2 text-purple_oscuro hover:bg-gray-100 w-full text-left">FRA</button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
          {/* Botón de hamburguesa visible solo en pantallas pequeñas */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isSticky ? 'text-purple_oscuro' : 'text-white'} focus:outline-none`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
