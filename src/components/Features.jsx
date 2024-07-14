import React from "react";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";

const Features = () => {
  return (
    <div
      id="features"
      className="w-full bg-gradient-to-r from-yellow-300 to-red-500 py-16 px-4 pt-20"
    >
      <section className="p-10 text-center">
        <h3 className="text-4xl font-extrabold text-white mb-12">Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
              <img
                src={feature1}
                alt="Característica 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-50 mix-blend-overlay rounded-full"></div>
            </div>
            <h4 className="text-2xl font-bold mb-2">
              Gestiona ciclistas, masajistas y directores de tu equipo.
            </h4>
            <p className="text-gray-700">
              Mantén un registro detallado de cada miembro del equipo,
              incluyendo ciclistas, masajistas y directores deportivos. Facilita
              la organización y coordinación de roles y responsabilidades.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
              <img
                src={feature2}
                alt="Característica 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-2xl font-bold mb-2">
              Crea y gestiona equipos para diferentes carreras.
            </h4>
            <p className="text-gray-700">
              Forma equipos adaptados a las necesidades de cada carrera.
              Planifica estrategias y asigna roles específicos para maximizar el
              rendimiento en competiciones.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
              <img
                src={feature3}
                alt="Característica 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-500 bg-opacity-50 mix-blend-overlay rounded-full"></div>
            </div>
            <h4 className="text-2xl font-bold mb-2">
              Genera informes y realiza un seguimiento de las métricas de
              rendimiento.
            </h4>
            <p className="text-gray-700">
              Analiza el desempeño de tu equipo con informes detallados.
              Supervisa las métricas de rendimiento para identificar áreas de
              mejora y tomar decisiones informadas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
