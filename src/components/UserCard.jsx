import React from "react";

function UserCard({ user }) {
    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-xl font-bold text-gray-900">{user.nombre}</h2>
                    <p className="mt-1 text-md text-gray-700">{user.tipo}</p>
                    <p className="mt-1 text-md text-gray-700">{user.correo}</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:block sm:space-x-6 text-md">
                    <button className="mt-6 w-full rounded-md bg-blue-400 py-1.5 font-medium text-white hover:bg-blue-500">
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
