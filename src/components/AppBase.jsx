import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../utils/GlobalContext";
import avatarImg from "../assets/avatar.png";

function AppBase({ children }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      {/* Header */}
      <header className="fixed z-20 top-0 left-0 flex w-full h-20 items-center justify-between bg-black text-white px-6">
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-3xl font-bold">ISUCI</div>
        </div>

        <nav className="flex space-x-8">
          <Link
            to="/home"
            className="transition text-white hover:bg-gray-700 rounded-md p-2"
          >
            Simulación
          </Link>
          <Link
            to="/cart"
            className="transition text-white hover:bg-gray-700 rounded-md p-2"
          >
            Perfiles
          </Link>
          <Link
            to="/team/register"
            className="transition text-white hover:bg-gray-700 rounded-md p-2"
          >
            Registrar Equipo
          </Link>
          <Link
            to="/customer/register"
            className="transition text-white hover:bg-gray-700 rounded-md p-2"
          >
            Registrar Usuario
          </Link>
          <Link
            to="/stats"
            className="transition text-white hover:bg-gray-700 rounded-md p-2"
          >
            Estadísticas
          </Link>
        </nav>

        <div className="relative">
          <button
            type="button"
            onClick={toggleProfile}
            className="h-10 w-10 overflow-hidden rounded-full"
          >
            <img src={avatarImg} alt="user" />
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 divide-y divide-gray-700 rounded-md border border-gray-700 bg-black shadow-md">
              <div className="flex items-center space-x-2 p-2 text-white">
                <img
                  src={avatarImg}
                  alt="user"
                  className="h-10 w-10 rounded-full"
                />
                <div className="font-medium">Usuario</div>
              </div>

              <div className="flex flex-col space-y-3 p-2">
                <a
                  href="#"
                  className="transition text-white hover:bg-gray-700 rounded-md p-2"
                >
                  Mi Perfil
                </a>
                <a
                  href="#"
                  className="transition text-white hover:bg-gray-700 rounded-md p-2"
                >
                  Editar Perfil
                </a>
                <a
                  href="#"
                  className="transition text-white hover:bg-gray-700 rounded-md p-2"
                >
                  Configuración
                </a>
              </div>

              <div className="p-2">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center space-x-2 transition text-white hover:bg-gray-700 rounded-md p-2 w-full"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <div>Cerrar Sesión</div>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="pt-20 w-full p-4">{children}</div>
    </main>
  );
}

export default AppBase;
