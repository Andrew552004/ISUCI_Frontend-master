import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBase from "../components/AppBase";

function RegisterTeamPage() {
    const [formData, setFormData] = useState({
        nombreEquipo: "",
        pais: "",
        anoFundacion: "",
        ciclistas: [],
        otrosParticipantes: []
    });

    const [availableParticipants, setAvailableParticipants] = useState([]);

    useEffect(() => {
        // Fetch previously registered participants
        const fetchParticipants = async () => {
            try {
                const response = await axios.get("http://localhost:8080/participantes");
                setAvailableParticipants(response.data);
            } catch (error) {
                console.error("Error fetching participants:", error);
                toast.error(`Error al obtener participantes: ${error.response.data}`, {
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
        fetchParticipants();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddParticipant = (participant) => {
        if (participant.tipo === 'Ciclista') {
            setFormData({
                ...formData,
                ciclistas: [...formData.ciclistas, participant]
            });
        } else {
            setFormData({
                ...formData,
                otrosParticipantes: [...formData.otrosParticipantes, participant]
            });
        }
    };

    const handleRemoveParticipant = (id, tipo) => {
        if (tipo === 'Ciclista') {
            setFormData({
                ...formData,
                ciclistas: formData.ciclistas.filter(part => part.id !== id)
            });
        } else {
            setFormData({
                ...formData,
                otrosParticipantes: formData.otrosParticipantes.filter(part => part.id !== id)
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formValues = Object.values(formData).filter(value => Array.isArray(value) ? value.length > 0 : value !== "");
        const allFieldsFilled = formValues.length === Object.keys(formData).length;

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

        try {
            await axios.post("http://localhost:8080/equipo/agregar", formData, {
                headers: {
                    'user': localStorage.getItem('user'),
                    'password': localStorage.getItem('password')
                }
            });
            toast.success(`Equipo registrado exitosamente`, {
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
                nombreEquipo: "",
                pais: "",
                anoFundacion: "",
                ciclistas: [],
                otrosParticipantes: []
            });
        } catch (error) {
            console.error("Error al registrar el equipo:", error);
            toast.error(`Error al registrar equipo: ${error.response.data}`, {
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
            <div className="text-4xl font-bold px-6 py-4">
                Registrar Equipo
            </div>

            <div className="p-10 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-11/12 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Nombre del Equipo
                            </label>
                            <input
                                type="text"
                                name="nombreEquipo"
                                value={formData.nombreEquipo}
                                onChange={handleChange}
                                className="px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Nombre del Equipo"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                País
                            </label>
                            <input
                                type="text"
                                name="pais"
                                value={formData.pais}
                                onChange={handleChange}
                                className="px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="País"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Año de Fundación
                            </label>
                            <input
                                type="number" min="0"
                                name="anoFundacion"
                                value={formData.anoFundacion}
                                onChange={handleChange}
                                className="px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Año de Fundación"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <label className="leading-loose font-semibold text-lg">
                            Agregar Participantes
                        </label>
                        <select
                            className="px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                            onChange={(e) => {
                                const participant = availableParticipants.find(p => p.id === parseInt(e.target.value));
                                handleAddParticipant(participant);
                            }}
                        >
                            <option value="">Selecciona un participante</option>
                            {availableParticipants.map(participant => (
                                <option key={participant.id} value={participant.id}>
                                    {participant.nombre} - {participant.tipo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-6">
                        {formData.ciclistas.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Ciclistas en el equipo</h3>
                                {formData.ciclistas.map(participant => (
                                    <div key={participant.id} className="flex justify-between mb-4 bg-white p-4 rounded shadow-md">
                                        <div>
                                            <p className="font-bold text-lg">{participant.nombre}</p>
                                            <p className="text-gray-600">{participant.correo}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveParticipant(participant.id, participant.tipo)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {formData.otrosParticipantes.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold mb-4">Otros participantes en el equipo</h3>
                                {formData.otrosParticipantes.map(participant => (
                                    <div key={participant.id} className="flex justify-between mb-4 bg-white p-4 rounded shadow-md">
                                        <div>
                                            <p className="font-bold text-lg">{participant.nombre}</p>
                                            <p className="text-gray-600">{participant.correo}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveParticipant(participant.id, participant.tipo)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="pt-6 flex items-center space-x-4">
                        <button type="submit"
                            className="bg-blue-600 flex justify-center items-center w-full text-white px-6 py-4 rounded-md focus:outline-none hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-transparent transition-colors duration-300">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </AppBase>
    );
}

export default RegisterTeamPage;
