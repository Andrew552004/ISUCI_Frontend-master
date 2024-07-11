import React from "react";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";

const Features = () => {
  return (
    <div id="features" className="w-full bg-white py-16 px-4">
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Características</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={feature1}
              alt="Característica 1"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h4 className="text-xl font-bold mb-2">
              Gestiona ciclistas, masajistas y directores de tu equipo.
            </h4>
            <p className="text-gray-600">
              Mantén un registro detallado de cada miembro del equipo,
              incluyendo ciclistas, masajistas y directores deportivos. Facilita
              la organización y coordinación de roles y responsabilidades.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={feature2}
              alt="Característica 2"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h4 className="text-xl font-bold mb-2">
              Crea y gestiona equipos para diferentes carreras.
            </h4>
            <p className="text-gray-600">
              Forma equipos adaptados a las necesidades de cada carrera.
              Planifica estrategias y asigna roles específicos para maximizar el
              rendimiento en competiciones.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={feature3}
              alt="Característica 3"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h4 className="text-xl font-bold mb-2">
              Genera informes y realiza un seguimiento de las métricas de
              rendimiento.
            </h4>
            <p className="text-gray-600">
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
