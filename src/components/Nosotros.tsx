import React from 'react';
import '../styles/global.css';
//import { FaCheck } from 'react-icons/fa';

const Nosotros: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen h-auto xl:h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <img
          src="nosotros.png"
          alt="Nosotros"
          className="w-[490px] h-[460px] object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-8 md:px-24 md:py-8 p-8">
        <div className="items-start">
          <p className="text-16 text-purple_fosforesente font-bold custom-line-height">
            ＿ Sobre nosotros
          </p>
          <h1 className="mb-4 text-45 font-extrabold custom-line-height1">
            Lorem Ipsum Lorem
          </h1>
          <p className="mb-4 font-medium custom-line-height30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at purus at leo tempor hendrerit. Integer feugiat lectus turpis, tincidunt malesuada lectus eleifend ut. Suspendisse potenti. Aliquam erat volutpat. Morbi lacinia urna dui, vel tempus felis porttitor quis. Morbi in commodo risus. Pellentesque mollis nibh vel metus egestas aliquam.
          </p>
          <div className="width:485px height:12px bg:primario_b"></div>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 mb-9 mt-9 ml-4">
            <div className="flex items-center space-x-3">
              <img src="./icon_check.png" alt="Check" className="w-5 h-4" />
              <p className="text-18 font-bold">Servicio de calidad</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src="./icon_check.png" alt="Check" className="w-5 h-4" />
              <p className="text-18 font-bold">Seguridad</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src="./icon_check.png" alt="Check" className="w-5 h-4" />
              <p className="text-18 font-bold">Soporte 24/7</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src="./icon_check.png" alt="Check" className="w-5 h-4" />
              <p className="text-18 font-bold">Profesionales de confianza</p>
            </div>
          </div>
        <div className="flex flex-col md:flex-row md:gap-8 mb-4">
        <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block w-[200px] h-[58px] text-16 font-semibold text-white bg-purple_fosforesente hover:bg-primario_b transition duration-300 flex items-center justify-center"
          >
            Contáctanos
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;