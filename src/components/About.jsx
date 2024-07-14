import React from "react";

const About = () => {
  return (
    <div id="about" className="w-ful py-16 px-4 pt-20 about-page-background">
      <section className="p-10 md:text-left text-center">
        <h3 className="text-4xl font-extrabold mb-12 text-center  text-white">
          Sobre Nosotros
        </h3>
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0  text-white">
            <p className="text-lg mb-4">
              ISUCI (Sistema de Información de Ciclismo) es una plataforma
              integral diseñada para gestionar y analizar el rendimiento de
              equipos y ciclistas.
            </p>
            <p className="text-lg mb-4">
              Nuestro objetivo es proporcionar a los equipos de ciclismo las
              herramientas necesarias para organizar sus actividades, seguir el
              progreso de sus miembros y tomar decisiones informadas basadas en
              datos.
            </p>
            <p className="text-lg mb-4">
              Nuestra plataforma está diseñada para ser intuitiva y fácil de
              usar, proporcionando una experiencia fluida para todos los
              usuarios.
            </p>
            <p className="text-lg mb-8">
              Únete a nosotros y lleva tu equipo de ciclismo al siguiente nivel
              con ISUCI.
            </p>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold  text-gray-800 mb-4 text-center">
              Contáctanos
            </h4>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-left font-medium text-gray-600"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left font-medium text-gray-600"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-left font-medium text-gray-600"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#1d6bc4] text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
