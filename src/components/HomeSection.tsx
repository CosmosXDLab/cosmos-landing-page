import React from 'react';

const HomeSection: React.FC = () => {
    return (
        <section
          id="inicio"
          className="min-h-screen bg-home-image text-white flex flex-col justify-center px-6 lg:px-6 relative"
        >
          {/* Imagen de efecto superpuesta */}
          <div className="bg-effect-overlay"></div>

          <div className="container mx-auto relative z-20">
            <h1 className="text-96 font-bold mb-4">
              Lorem Ipsum
            </h1>
            <h1 className="text-96 font-bold mb-7">
              Lorem
            </h1>
            <p className="text-18 font-semibold mb-10">
              Quisque quis ornare augue. Nulla sit amet arcu et ligula vel tortor iaculis vestibulum non ultrices eros.
            </p>
            <button
                onClick={() => {/* Agrega aquí la acción que deseas realizar */}}
                className="mt-6 inline-block w-[200px] h-[58px] text-16 font-semibold text-white bg-purple_fosforesente hover:bg-primario_b transition duration-300 flex items-center justify-center"
              >
                Leer Más
            </button>
          </div>
        </section>
    );
};

export default HomeSection;
