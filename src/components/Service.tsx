import React from 'react';

const Service: React.FC = () => {
  return (
    <div className="bg-effect-overlay3 w-full max-w-1366 min-h-screen flex flex-col justify-center items-center relative p-10 gap-10">
      
      <div className="w-full max-w-6xl h-[50vh] md:h-[502px] flex justify-center gap-4">
        <div className="items-start">
            <p className="text-center text-purple_fosforesente text-16 font-semibold mb-4">＿ 
                ¿Qué servicios ofrecemos a nuestros clientes?
            </p>
            <h1 className="custom-line-height1 text-36 font-extrabold text-center  text-black_m custom-width ">
                Gestión en Tiempo Real de todas las
                <br />
                Soluciones y Servicios Profesionales de TI
            </h1>   
        </div>
        {/* <div className="w-full h-[310px] bg-green-500">

        </div> */}
      </div>
    </div>
  );
};

export default Service;

