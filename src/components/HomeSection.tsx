import React from 'react';

const HomeSection: React.FC = () => {
    return (
        <section
          id="home"
          className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center bg-home-image px-6 lg:px-6"
        >
          <div className="container mx-auto">
            <h1 className="text-96 font-bold">
              Lorem Ipsum
            </h1>
            <h1 className="text-96 font-bold">
              Lorem
            </h1>
            <p className="text-18">
              Quisque quis ornare augue. Nulla sit amet arcu et ligula vel tortor iaculis vestibulum non ultrices eros.
            </p>
            <a
              href="#"
              className="mt-6 inline-block w-[200px] h-[58px] text-16 font-semibold text-white bg-purple_fosforesente rounded-lg hover:bg-primario_b transition duration-300 flex items-center justify-center"
            >
              Leer Más
            </a>
          </div>
        </section>
    );
};

export default HomeSection;