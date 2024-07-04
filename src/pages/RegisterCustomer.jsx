import React, { useState } from "react";
import axios from "axios";
import AppBase from "../components/AppBase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterCustomer() {
    const [profileType, setProfileType] = useState("ciclista"); // Nuevo estado para el tipo de perfil
    const [formData, setFormData] = useState({
        nombre1: "",
        nombre2: "",
        apellido1: "",
        apellido2: "",
        identificacion: "",
        anosExperiencia: "",
        paisNacimiento: "",
        fechaNacimiento: "",
        edad: "",
        telefono: "",
        correo: "",
        equipo: "",
        genero: "",
        especialidad: "",
        peso: "",
        altura: "",
        tiempoAcumulado: ""
    });

    const handleProfileChange = (e) => {
        setProfileType(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = [
            "nombre1", "apellido1", "identificacion", "paisNacimiento", "fechaNacimiento", "edad", "telefono", "correo", "equipo"
        ];

        if (profileType === "masajista" || profileType === "director") {
            requiredFields.push("anosExperiencia");
        } else if (profileType === "ciclista") {
            requiredFields.push("genero", "especialidad", "peso", "altura", "tiempoAcumulado");
        }

        const allFieldsFilled = requiredFields.every(field => formData[field]);

        if (!allFieldsFilled) {
            toast.warn(`Completa todos los campos.`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        const user = localStorage.getItem('user');
        const password = localStorage.getItem('password');

        try {
            await axios.post("http://localhost:8080/cliente/agregar", formData, {
                headers: {
                    'user': user,
                    'password': password
                }
            });
            toast.success(`Usuario registrado con éxito`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setFormData({
                nombre1: "",
                nombre2: "",
                apellido1: "",
                apellido2: "",
                identificacion: "",
                anosExperiencia: "",
                paisNacimiento: "",
                fechaNacimiento: "",
                edad: "",
                telefono: "",
                correo: "",
                equipo: "",
                genero: "",
                especialidad: "",
                peso: "",
                altura: "",
                tiempoAcumulado: ""
            });
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            toast.error(`Error al registrar usuario: ${error.response.data}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <AppBase>
            <div className="pt-6">
                <div className="text-4xl font-bold px-6 py-4" style={{ color: "black" }}>
                    Registrar Usuario
                </div>

                <div className="p-10 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-11/12 mx-auto" style={{ backgroundColor: "#FFFFFF" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Tipo de Perfil
                                </label>
                                <select
                                    name="profileType"
                                    value={profileType}
                                    onChange={handleProfileChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                >
                                    <option value="ciclista">Ciclista</option>
                                    <option value="masajista">Masajista</option>
                                    <option value="director">Director Deportivo</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Primer Nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre1"
                                    value={formData.nombre1}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Primer Nombre"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Segundo Nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre2"
                                    value={formData.nombre2}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Segundo Nombre"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Primer Apellido
                                </label>
                                <input
                                    type="text"
                                    name="apellido1"
                                    value={formData.apellido1}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Primer Apellido"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Segundo Apellido
                                </label>
                                <input
                                    type="text"
                                    name="apellido2"
                                    value={formData.apellido2}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Segundo Apellido"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Identificación
                                </label>
                                <input
                                    type="text"
                                    name="identificacion"
                                    value={formData.identificacion}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Identificación"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Años de Experiencia
                                </label>
                                <input
                                    type="number"
                                    name="anosExperiencia"
                                    value={formData.anosExperiencia}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Años de Experiencia"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    País de Nacimiento
                                </label>
                                <input
                                    type="text"
                                    name="paisNacimiento"
                                    value={formData.paisNacimiento}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="País de Nacimiento"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    type="date"
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Fecha de Nacimiento"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Edad
                                </label>
                                <input
                                    type="number"
                                    name="edad"
                                    value={formData.edad}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Edad"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Teléfono"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                    Equipo
                                </label>
                                <input
                                    type="text"
                                    name="equipo"
                                    value={formData.equipo}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Equipo"
                                />
                            </div>
                            {profileType === "ciclista" && (
                                <>
                                    <div className="flex flex-col">
                                        <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                            Género
                                        </label>
                                        <select
                                            name="genero"
                                            value={formData.genero}
                                            onChange={handleChange}
                                            className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        >
                                            <option value="">Seleccione Género</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                            Especialidad
                                        </label>
                                        <select
                                            name="especialidad"
                                            value={formData.especialidad}
                                            onChange={handleChange}
                                            className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        >
                                            <option value="">Seleccione Especialidad</option>
                                            <option value="Rodador">Rodador</option>
                                            <option value="Escalador">Escalador</option>
                                            <option value="Sprinter">Sprinter</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                            Peso
                                        </label>
                                        <input
                                            type="number"
                                            name="peso"
                                            value={formData.peso}
                                            onChange={handleChange}
                                            className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Peso (kg)"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                            Altura
                                        </label>
                                        <input
                                            type="number"
                                            name="altura"
                                            value={formData.altura}
                                            onChange={handleChange}
                                            className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Altura (cm)"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose font-semibold text-lg" style={{ color: "black" }}>
                                            Tiempo Acumulado
                                        </label>
                                        <input
                                            type="number"
                                            name="tiempoAcumulado"
                                            value={formData.tiempoAcumulado}
                                            onChange={handleChange}
                                            className="px-4 py-3 border focus:ring-yellow-500 focus:border-yellow-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Tiempo Acumulado (horas)"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="pt-4 flex items-center space-x-4">
                            <button
                                type="submit"
                                className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                                style={{ backgroundColor: "blue" }}
                            >
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </AppBase>
    );
}

export default RegisterCustomer;
