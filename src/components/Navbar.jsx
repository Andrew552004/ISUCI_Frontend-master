import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#3F3F49] text-white h-24 flex justify-between items-center px-20 w-full">
      <h1 className="text-3xl font-bold text-[#61a7fc]">ISUCI</h1>
      <ul className="hidden md:flex space-x-4">
        <li className="p-4">
          <a href="#hero">Inicio</a>
        </li>
        <li className="p-4">
          <a href="#features">Servicios</a>
        </li>
        <li className="p-4">
          <a href="#about">Nosotros</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#3F3F49] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#61a7fc] m-4">ISUCI</h1>

        <ul className="pt-4 uppercase">
          <li className="p-4 border-b border-gray-600">
            <a href="#hero">Inicio</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#features">Servicios</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#about">Nosotros</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
