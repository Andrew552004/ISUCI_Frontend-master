import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/register");
  };

  return (
    <div id="hero" className=" text-white pt-24">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#61a7fc] font-bold p-2">
          SISTEMA DE INFORMACIÓN DE CICLISMO
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-white">
          Gestión de carreras y Análisis de datos.
        </h1>
        <div className="md:flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-mine font-bold py-2">
            Haz parte de una escuadra si eres
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-mine font-bold md:pl-4"
            strings={["ciclista", "masajista", "director deportivo"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></ReactTyped>
        </div>
        <p className="md:text-2xl sm:text-xl text-s font-bold text-gray-400">
          Únete a nuestra comunidad y lleva tu carrera ciclista al siguiente
          nivel.
        </p>
        <button
          className="bg-[#1d6bc4] w-[200px] rounded font-medium my-6 mx-auto py-3 "
          onClick={handleStartClick}
        >
          Empezar
        </button>
      </div>
    </div>
  );
};

export default Hero;
