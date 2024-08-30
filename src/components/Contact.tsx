import React from 'react';
import '../styles/global.css';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen h-auto xl:h-screen">
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-gray-100">
          <div className="max-w-md items-start">
              <p className="text-16 text-purple_fosforesente font-bold mb-4">
                  ＿ Contáctanos
              </p>
              <h1 className="text-36 font-extrabold mb-12">
                  Lorem Ipsum Lorem
              </h1>
              <div className="flex items-center justify-start mb-6 ">
                  <img src="./icon_telefono.png" alt="Teléfono" className="mr-6" />
                  <div className="text-left">
                      <p className="text-16 text-gris mb-1">Llama a cualquier hora</p>
                      <p className="text-20 font-semibold">+51 944 253 510</p>
                  </div>
              </div>
              <div className="flex items-center justify-start mb-6">
                  <img src="./icon_correo.png" alt="Correo" className="mr-6" />
                  <div className="text-left">
                      <p className="text-16 text-gris mb-1">Envia un correo</p>
                      <p className="text-20 font-semibold">info@cosmosxd.com</p>
                  </div>
              </div>
              <div className="flex items-center justify-start">
                  <img src="./icon_mapa.png" alt="Mapa" className="mr-6" />
                  <div className="text-left">
                      <p className="text-16 text-gris mb-1">Visitanos en nuestras redes</p>
                      <p className="text-20 font-semibold">@cosmosxd.official</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="w-full lg:w-3/5 flex items-center justify-center p-8 bg-white">
        <div className="max-w-3xl w-full bg-gray-100 p-8">
          <form className="space-y-6 text-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300"
                    placeholder="Nombres"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 border border-gray-300"
                    placeholder="Teléfono"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300"
                    placeholder="Correo"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 border border-gray-300"
                    placeholder="Asunto"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 h-48"
                placeholder="Escribe un mensaje"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-16 w-full py-3 bg-purple_fosforesente text-white font-semibold"
            >
              Envía un mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;