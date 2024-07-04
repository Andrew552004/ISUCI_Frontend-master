import React, { useState } from "react";
import AppBase from "../components/AppBase";
import UserCard from "../components/UserCard";

function UserListPage() {
    const [users, setUsers] = useState([
        { id: 1, nombre: "Juan Pérez", tipo: "Ciclista", correo: "juan@example.com" },
        { id: 2, nombre: "Ana Gómez", tipo: "Masajista", correo: "ana@example.com" },
        { id: 3, nombre: "Carlos Ruiz", tipo: "Director Deportivo", correo: "carlos@example.com" },
    ]);

    return (
        <AppBase>
            <div className="text-4xl font-bold px-6 py-4">Usuarios Registrados</div>
            <div className="h-screen w-full bg-gray-100 pt-10 px-10">
                <div className="mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {users.map(user => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </div>
        </AppBase>
    );
}

export default UserListPage;
