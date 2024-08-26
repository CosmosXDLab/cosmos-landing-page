import React, { useEffect, useState } from 'react';
import '../styles/global.css';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      // Detect which section is currently in view
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.getAttribute('id') || '';
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll(); 

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
            src={isSticky ? "./icon_logo.png" : "./cosmos.png"}
            alt="Logo"
            className="image-logo"
          />
          <h1 className={`text-18 font-bold ${isSticky ? 'text-purple_oscuro' : 'text-white'}`}>
            <a href="#">Cosmos Experience Developer</a>
          </h1>
        </div>
        {/* Menú de navegación */}
        <div className="relative flex items-center space-x-4">
          {/* Menú principal visible en pantallas grandes */}
          <ul
            className={`hidden xl:flex space-x-6 ${isSticky ? 'text-purple_oscuro' : 'text-white'} text-16 font-semibold xl:space-x-8 items-center`}
          >
            {['inicio', 'servicios', 'proyectos', 'acerca de', 'contacto'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`block py-2 xl:py-0 ${
                    activeSection === section
                      ? `border-b-4 ${isSticky ? 'border-purple_oscuro' : 'border-white'}`
                      : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <div className="flex items-center space-x-3 ml-8">
                <img
                  src={isSticky ? "./icon_buscar_color.png" : "./icon_buscar.png"}
                  alt="Buscar"
                  className=""
                />
              </div>
            </li>
            <li className="relative flex items-center">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`focus:outline-none ${isSticky ? 'text-purple_oscuro' : 'text-black'} bg-white border border-gray-300 rounded-full px-6 py-2 flex items-center space-x-2`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="./icon_idioma.png"
                    alt="Idioma"
                    className=""
                  />
                </div>
                <span className="text-16 font-semibold">Esp</span>
                <div className="flex items-center space-x-3">
                  <img
                    src="./icon_idioma_2.png"
                    alt="Idioma_2"
                    className=""
                  />
                </div>
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
            <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg xl:hidden">
              <ul className="space-y-2 p-2">
                {['inicio', 'servicios', 'proyectos', 'acerca de', 'contacto'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`block py-2 px-4 text-purple_oscuro hover:bg-gray-100 ${
                        activeSection === section ? 'border-b-2 border-purple_oscuro' : ''
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
                {/* <li>
                  <div className="flex items-center space-x-3 ml-8">
                    <img
                      src="./icon_buscar_color.png"
                      alt="Buscar"
                      className=""
                    />
                  </div>
                </li>
                <li className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className={`w-full text-purple_oscuro hover:bg-gray-100 px-4 py-2 flex items-center space-x-2 ${isSticky ? 'text-purple_oscuro' : 'text-black'} bg-white border border-gray-300 rounded-full`}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src="./icon_idioma.png"
                        alt="Idioma"
                        className=""
                      />
                    </div>
                    <span className="text-16 font-semibold">Esp</span>
                    <div className="flex items-center space-x-3">
                      <img
                        src="./icon_idioma_2.png"
                        alt="Idioma_2"
                        className=""
                      />
                    </div>
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
                </li> */}
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
